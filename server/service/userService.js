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
            throw new Error('Користувач з вказаним email вже існує')
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const activationLink = v4()
        const user = await User.create({email, role, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/user/activate/${activationLink}`)

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
            throw new Error('Некоректне посилання активації')
        }
        user.isActivated = true
        await user.save()

    }
}

const userService = new UserService()

export default userService