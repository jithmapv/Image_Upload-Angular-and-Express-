// configuration with db.config.js file :

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "Image_Upload",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
