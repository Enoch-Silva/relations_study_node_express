const Sequelize = require("sequelize");
const database = require("../db");
const Esposa = require("./Esposa");
const Filho = require("./Filho");

const Marido = database.define("marido", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Marido.belongsTo(Esposa, {
  constraint: true,
  foreignKey: "idEsposa",
});

Marido.hasMany(Filho, {
  constraint: true,
  foreignKey: "maridoId",
});

module.exports = Marido;
