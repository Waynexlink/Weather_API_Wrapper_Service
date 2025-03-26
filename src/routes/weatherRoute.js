const express = require("express");
const { getWeatherdata } = require("../controller/weatherController");
const validatorMiddleware = require("./src/middlewares/validateMiddleware");
const Router = express.Router();

Router.get("/:city", validatorMiddleware, getWeatherdata);

Router.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = Router;
