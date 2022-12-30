import * as uuid from 'uuid'
import {fileURLToPath} from 'url';
import path from 'path';
import {Product, ProductInfo} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";
import {Op} from "sequelize";

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, description, colors, sizes, discount} = req.body
            let currentPrice = Math.ceil(price - (price * (discount / 100)))
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            const __dirname = fileURLToPath(import.meta.url)
            await img.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
            const product = await Product.create({name, price, categoryId, img: fileName, discount, currentPrice})
            await ProductInfo.create({
                    description: description,
                    productId: product.id,
                    colors: JSON.parse(colors),
                    sizes: JSON.parse(sizes)
                }
            )
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res, next) {
        try {
            let {categoryId, sort} = req.query
            categoryId = categoryId || 0
            let products
            if (parseInt(categoryId) === 0) {
                products = await Product.findAll()
            } else {
                products = await Product.findAll({where: {categoryId}})
            }
            if (parseInt(sort) === 0) {
                return res.json([...products].sort((a, b) => b.id - a.id))
            } else if (parseInt(sort) === 1) {
                return res.json([...products].sort((a, b) => parseInt(a.currentPrice) - parseInt(b.currentPrice)))
            } else {
                return res.json([...products].sort((a, b) => parseInt(b.currentPrice) - parseInt(a.currentPrice)))
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findOne({where: {id}})
            const productInfo = await ProductInfo.findOne({where: {productId: id}})
            const productData = {
                product,
                info: productInfo
            }
            return res.json(productData)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            const productId = req.params.id
            const product = await Product.findOne({where: {id: productId}})
            if (product.stock) {
                product.stock = false
                await product.save()
            } else {
                product.stock = true
                await product.save()
            }
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            let {name, price, categoryId, description, colors, sizes, discount} = req.body
            const productId = req.params.id

            const productData = await Product.update({
                name: name,
                price: price,
                categoryId: categoryId,
                discount: discount
            }, {where: {id: productId}})

            if (req.files) {
                const {img} = req.files
                let fileName = uuid.v4() + '.jpg'
                const __dirname = fileURLToPath(import.meta.url)
                img.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
                await Product.update({img: fileName}, {where: {id: productId}})
            }

            const productInfo = await ProductInfo.update({
                description: description,
                colors: JSON.parse(colors),
                sizes: JSON.parse(sizes)
            }, {where: {productId}})

            const product = {
                product: productData,
                info: productInfo
            }
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async search(req, res, next) {
        try {
            let {searchQuery} = req.query
            const products = await Product.findAll({where: {name: {[Op.iLike]: `%${searchQuery}%`}}})
            return res.json(products)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

const productController = new ProductController()

export default productController

