const { DataTypes } = require("sequelize");
const Filho = require("./Filho");
const database = require("../db");

const Pai = database.define("Pai", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pai;
