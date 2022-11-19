import {Router} from 'express'
import userController from "../controllers/userController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";

const userRouter = new Router()


userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/activate/:link', userController.activate)
userRouter.get('/refresh', userController.refresh)
userRouter.get('/users', userController.getUsers)
userRouter.get('/auth', authMiddleware, userController.check)


export default userRouter