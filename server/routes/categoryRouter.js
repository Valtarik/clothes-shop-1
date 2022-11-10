import { Router } from 'express'
import categoryController from "../controllers/categoryController.js";
import {checkRoleMiddleware} from "../middlewares/checkRoleMiddleware.js";
const categoryRouter = new Router()


categoryRouter.post('/', checkRoleMiddleware('ADMIN'), categoryController.create)
categoryRouter.get('/', categoryController.getAll)


export default categoryRouter