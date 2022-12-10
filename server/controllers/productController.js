import * as uuid from 'uuid'
import {fileURLToPath} from 'url';
import path from 'path';
import {Category, Product, ProductInfo} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, description, colors, sizes, discount} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            const __dirname = fileURLToPath(import.meta.url)
            img.mv(path.resolve(__dirname, '..', '..', 'static', fileName))
            const product = await Product.create({name, price, categoryId, img: fileName, discount})
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
            let {categoryId, limit, page} = req.query
            categoryId = categoryId || 0
            page = page || 1
            limit = limit || 12
            let offset = page * limit - limit
            let products
            if (parseInt(categoryId) === 0) {
                products = await Product.findAndCountAll({limit, offset})
            } else {
                products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
            }
            return res.json(products)
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

            const product = await Product.destroy({where: {id: productId}})

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        console.log(req.params)
        let {name, price, categoryId, description, colors, sizes, discount} = req.body
        console.log(name)
        console.log(price)
        // try {
        //     const productId = req.params.id
        //
        //     const product = await Product.update(req.body, {where: {id: productId}})
        //
        //     return res.json(product)
        // } catch (e) {
        //     next(ApiError.badRequest(e.message))
        // }
    }
}

const productController = new ProductController()

export default productController

