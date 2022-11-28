import {Router} from 'express'
import categoryController from "../controllers/categoryController.js";
import {checkRoleMiddleware} from "../middlewares/checkRoleMiddleware.js";

const categoryRouter = new Router()


categoryRouter.post('/create', checkRoleMiddleware('ADMIN'), categoryController.create)
categoryRouter.delete('/delete', checkRoleMiddleware('ADMIN'), categoryController.delete)
categoryRouter.patch('/update', checkRoleMiddleware('ADMIN'), categoryController.update)
categoryRouter.get('/', categoryController.getAll)


export default categoryRouter