const { Category } = require("../models/models");
const ApiError = require("../error/ApiError");

class CategoryController {
  async create(req, res, next) {
    try {
      const { title, typeId } = req.body;
    const сategory = await Category.create({ title, typeId });
    return res.json(сategory);
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
    
  }

  async getAll(req, res) {
    const { typeId } = req.query;
    
    let сategories;
    if (!typeId) {
      сategories = await Category.findAll();
    } else {
      сategories = await Category.findAll({ where: { typeId } });
    } 
    return res.json(сategories);
  }
}

module.exports = new CategoryController();
