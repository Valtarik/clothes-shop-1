import {Order, OrderProduct, Product} from "../models/models.js"

class OrderController {
    async create(req, res, next) {
        try {
            let {firstName, lastName, email, phone, city, address, comment, cart} = req.body
            const order = await Order.create(
                {firstName, lastName, email, phone, city, address, comment, totalPrice: cart.total, status: 'Нове'})
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
        try {
            const {id} = req.params
            const orderInfo = await Order.findOne({where: {id}})
            const orderProducts = await OrderProduct.findAll({where: {orderId: id}})
            let prods = orderProducts.map(item => item.productId)
            let result = []
            for (let item in prods) {
                result.push(await Product.findOne({where: {id: prods[item]}}))
            }
            const order = {
                info: orderInfo,
                products: result,
                orderProducts
            }
            return res.json(order)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {status, id} = req.body
            const order = Order.update({status}, {where: {id}})
            return res.json(order)
        } catch (e) {
            next(e)
        }
    }
}

const orderController = new OrderController()

export default orderController