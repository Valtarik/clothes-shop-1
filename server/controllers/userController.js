import {ApiError} from "../error/ApiError.js";
import bcrypt from 'bcrypt'
import {User, Basket} from '../models/models.js'
import jwt from 'jsonwebtoken'
import userService from "../service/userService.js";

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            // if (!email || !password) {
            //     return next(ApiError.badRequest('Некоректний email чи пароль'))
            // }
            // const candidate = await User.findOne({where: {email}})
            // if (candidate) {
            //     return next(ApiError.badRequest('Користувач з вказаним email вже існує '))
            // }
            // const hashPassword = await bcrypt.hash(password, 10)
            // const user = await User.create({email, role, password: hashPassword})
            // const basket = await Basket.create({userId: user.id})
            // const token = generateJwt(user.id, user.email, user.role)
            const userData = await userService.registration(email, password, role)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true
            })
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Користувач не існує'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Невірний пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

const userController = new UserController()

export default userController