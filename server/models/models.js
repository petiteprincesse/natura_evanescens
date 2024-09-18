const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
});

Type.hasMany(Category);
Category.belongsTo(Type);

const Entity = sequelize.define("entity", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  latName: { type: DataTypes.STRING, unique: true },
  squad: { type: DataTypes.STRING },
  latSquad: { type: DataTypes.STRING },
  family: { type: DataTypes.STRING },
  latFamily: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  distribution: { type: DataTypes.STRING },
  quantity: { type: DataTypes.STRING },
  habitatFeatures: { type: DataTypes.STRING },
  limitingFactors: { type: DataTypes.STRING },
  conservationMeasures: { type: DataTypes.STRING },
  changeSpecies: { type: DataTypes.STRING },
  saving: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
});

Category.hasMany(Entity);
Entity.belongsTo(Category);

const Status = sequelize.define("status", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
  actual: { type: DataTypes.BOOLEAN },
  date: { type: DataTypes.DATEONLY },
});

Entity.hasMany(Status);
Status.belongsTo(Entity);

const Info = sequelize.define("info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  comment: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  checked: { type: DataTypes.BOOLEAN },
});

Entity.hasMany(Info);
Info.belongsTo(Entity);

const Territory = sequelize.define("territory", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
});

const TerritoryType = sequelize.define("territory_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  coordinateX: { type: DataTypes.FLOAT },
  coordinateY: { type: DataTypes.FLOAT },
});

Territory.hasMany(TerritoryType);
TerritoryType.belongsTo(Territory);

const TerritoryEntity = sequelize.define("territory_entity", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

TerritoryType.belongsToMany(Entity, { through: TerritoryEntity });
Entity.belongsToMany(TerritoryType, { through: TerritoryEntity });

module.exports = {
  User,
  Type,
  Category,
  Entity,
  Status,
  Info,
  Territory,
  TerritoryType,
  TerritoryEntity,
};
