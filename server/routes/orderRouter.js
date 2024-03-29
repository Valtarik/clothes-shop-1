import {Router} from 'express'
import orderController from "../controllers/orderController.js"

const orderRouter = new Router()

orderRouter.get('/', orderController.getAll)
orderRouter.get('/:id', orderController.getOne)
orderRouter.post('/user', orderController.getByEmail)
orderRouter.post('/', orderController.create)
orderRouter.patch('/', orderController.update)

export default orderRouter