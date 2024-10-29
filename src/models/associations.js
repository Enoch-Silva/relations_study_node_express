const Pai = require("./Pai");
const Filho = require("./Filho");

Pai.belongsToMany(Filho, { through: "PaiFilho", foreignKey: "paiId" });
Filho.belongsToMany(Pai, { through: "PaiFilho", foreignKey: "filhoId" });

module.exports = { Pai, Filho };
