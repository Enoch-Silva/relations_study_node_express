const database = require("./db");
const { Pai, Filho } = require("./models/associations");

database.sync({ force: true }).then(() => {
  console.log("Database synchronized");
});
