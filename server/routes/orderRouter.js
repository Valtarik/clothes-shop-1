import {Router} from 'express'
import orderController from "../controllers/orderController.js";

const orderRouter = new Router()

orderRouter.get('/', orderController.getAll)
orderRouter.get('/:id', orderController.getOne)
orderRouter.post('/', orderController.create)

export default orderRouter