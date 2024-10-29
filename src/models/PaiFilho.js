const { DataTypes } = require("sequelize");
const database = require("../db");
const Pai = require("./Pai");
const Filho = require("./Filho");

const PaiFilho = database.define("PaiFilho", {
  paiId: {
    type: DataTypes.INTEGER,
    references: {
      model: Pai,
      key: "id",
    },
  },
  filhoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Filho,
      key: "id",
    },
  },
});

Pai.belongsToMany(Filho, { through: PaiFilho, foreignKey: "paiId" });
Filho.belongsToMany(Pai, { through: PaiFilho, foreignKey: "filhoId" });

module.exports = PaiFilho;
