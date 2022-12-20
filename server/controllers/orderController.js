import {Order, OrderProduct} from "../models/models.js"

class OrderController {
    async create(req, res, next) {
        try {
            let {firstName, lastName, email, phone, city, address, comment, cart} = req.body
            const order = await Order.create(
                {firstName, lastName, email, phone, city, address, comment, totalPrice: cart.total, status: 'New'})
            cart.products.forEach(product =>
                OrderProduct.create({
                    quantity: product.quantity,
                    productId: product.productId,
                    orderId: order.id
                })
            )
            return res.json(order)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const orders = await Order.findAll()
            return res.json([...orders].sort((a, b) => b.id - a.id))
        } catch (e) {
            next(e)
        }
    }

    async getByEmail(req, res, next) {
    }

    async getOne(req, res, next) {
    }
}

const orderController = new OrderController()

export default orderController