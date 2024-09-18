//const uuid = require("uuid");
const path = require("path");
const { Entity } = require("../models/models");
const ApiError = require("../error/ApiError");

class EntityController {
  async create(req, res, next) {
    try {
      const {
        categoryId,
        name,
        latName,
        squad,
        latSquad,
        family,
        latFamily,
        status,
        distribution,
        quantity,
        habitatFeatures,
        limitingFactors,
        conservationMeasures,
        changeSpecies,
        saving,
      } = req.body;
      const { img } = req.files;
      //let fileName = uuid.v4() + ".jpg";
      let fileName = latName.replaceAll(/\s/g, "").toLowerCase() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const сategory = await Entity.create({
        categoryId,
        name,
        latName,
        squad,
        latSquad,
        family,
        latFamily,
        status,
        distribution,
        quantity,
        habitatFeatures,
        limitingFactors,
        conservationMeasures,
        changeSpecies,
        saving,
        img: fileName,
      });
      return res.json(сategory);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { categoryId } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let сategories;
    if (!categoryId) {
      сategories = await Entity.findAndCountAll({ limit, offset });
    } else {
      сategories = await Entity.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
      });
    }
    return res.json(сategories);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const entity = await Entity.findOne({
      where: { id }
    });
    return res.json(entity);
  }
}

module.exports = new EntityController();
