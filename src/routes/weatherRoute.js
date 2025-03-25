const express = require("express");
const { getWeatherdata } = require("../controller/weatherController");
const Router = express.Router();

Router.get("/:city", getWeatherdata);

Router.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = Router;
