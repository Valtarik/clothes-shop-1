import {Router} from 'express'
import userController from "../controllers/userController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";
import {body} from 'express-validator'

const userRouter = new Router()


userRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 32}),
    userController.registration)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
//userRouter.post('/google', userController.googleAuth)
userRouter.get('/activate/:link', userController.activate)
userRouter.get('/refresh', userController.refresh)
userRouter.get('/auth', authMiddleware, userController.check)


export default userRouter