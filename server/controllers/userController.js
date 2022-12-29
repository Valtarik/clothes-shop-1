import {ApiError} from "../error/ApiError.js";
import userService from "../service/userService.js";
import {validationResult} from "express-validator";

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Помилка при валідації', errors.array()))
            }
            const {email, password, role} = req.body
            const userData = await userService.registration(email, password, role)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true
            })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true,
            })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true,
            })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async googleAuth(req, res, next) {
        try {
            const {email} = req.body
            const userData = await userService.googleAuth(email)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true,
            })
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async forgotPassword(req, res, next) {
        try {
            const {email} = req.body
            await userService.forgotPassword(email)
        } catch (e) {
            next(e)
        }
    }

    async verifyPasswordLink(req, res, next) {
        try {
            const {id, link} = req.params
            const verified = await userService.verifyPasswordLink(id, link)
            if (!verified) {
                return res.json({message: "Invalid link"})
            }
            return res.redirect(`${process.env.CLIENT_URL}/reset-password/${id}/${link}`)
        } catch (e) {
            next(e)
        }
    }

    async resetPassword(req, res, next) {
        try {
            console.log(req.params)
            console.log(req.body)
            const {id, link} = req.params
            const {password} = req.body
            const userData = await userService.resetPassword(id, link, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

const userController = new UserController()

export default userController