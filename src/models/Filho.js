const { DataTypes } = require("sequelize");
const Pai = require("./Pai");
const database = require("../db");

const Filho = database.define("Filho", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Filho;
