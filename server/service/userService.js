import {User, Basket, Token} from '../models/models.js'
import {ApiError} from "../error/ApiError.js"
import bcrypt from 'bcrypt'
import {v4} from 'uuid'
import mailService from "./mailService.js"
import tokenService from "./tokenService.js"
import UserDTO from "../dtos/userDto.js";

class UserService {
    async registration(email, password, role) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.badRequest('Користувач з вказаним email вже існує')
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const activationLink = v4()
        const user = await User.create({email, role, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/user/activate/${activationLink}`)
        const basket = await Basket.create({userId: user.id})

        const userDto = new UserDTO(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink: activationLink}})
        if (!user) {
            throw ApiError.badRequest('Некоректне посилання активації')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw ApiError.badRequest('Користувач з вказаним email не знайдений')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.badRequest('Невірний пароль')
        }
        const userDto = new UserDTO(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findOne({where: {id: userData.id}})
        const userDto = new UserDTO(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

}

const userService = new UserService()

export default userService