const express = require("express");
const app = express();
const db = require("./src/models");
const initRoutes = require("./src/routes/web");
const cors = require('cors');

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
app.use(cors())

initRoutes(app);

// db.sequelize.sync({ force: false });
db.sequelize.sync({ force: false }).then(() => {
console.log("Drop and re-sync db.");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
