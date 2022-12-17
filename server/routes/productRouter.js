import {Router} from 'express'
import productController from "../controllers/productController.js";
import {checkRoleMiddleware} from "../middlewares/checkRoleMiddleware.js";

const productRouter = new Router()


productRouter.get('/', productController.getAll)
productRouter.get('/search', productController.search)
productRouter.get('/:id', productController.getOne)
productRouter.post('/', checkRoleMiddleware('ADMIN'), productController.create)
productRouter.patch('/:id', checkRoleMiddleware('ADMIN'), productController.update)
productRouter.delete('/:id', checkRoleMiddleware('ADMIN'), productController.remove)


export default productRouter