import * as uuid from 'uuid'
import {fileURLToPath} from 'url';
import path from 'path';
import {Product, ProductInfo} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

class ProductController {
    async create(req, res, next) {
        try {
            console.log(req.body)
            console.log(req.files)
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
            // let {categoryId, limit, page} = req.query
            // page = page || 1
            // limit = limit || 12
            // let offset = page * limit - limit
            // let products
            // if (!categoryId) {
            //     products = await Product.findAndCountAll({limit, offset})
            // }
            // if (categoryId) {
            //     products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
            // }
            const products = await Product.findAll()
            return res.json(products)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findOne(
                {
                    where: {id},
                    include: [{model: ProductInfo, as: 'info'}]
                },
            )
            return res.json(product)
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
        try {
            const productId = req.params.id

            const product = await Product.update(req.body, {where: {id: productId}})

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

const productController = new ProductController()

export default productController

