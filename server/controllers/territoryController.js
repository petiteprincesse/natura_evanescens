const { Territory } = require("../models/models");
const ApiError = require("../error/ApiError");

class TerritoryController {
  async create(req, res) {
    const { title } = req.body;
    const territory = await Territory.create({ title });
    return res.json(Territory);
  }

  async getAll(req, res) {
    const territories = await Territory.findAll();
    return res.json(territories);
  }
}

module.exports = new TerritoryController();
