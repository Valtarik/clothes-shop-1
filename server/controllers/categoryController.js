import {Category} from '../models/models.js'
import {ApiError} from "../error/ApiError.js";

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async update(req, res) {
        const {id, name} = req.body
        const category = await Category.findOne({where: {id}})
        category.name = name
        await category.save()
        res.json(category)
    }

    async delete(req, res) {
        const {id} = req.body.params
        const category = await Category.destroy({where: {id}})
        res.json(category)
    }
}

const categoryController = new CategoryController()

export default categoryController