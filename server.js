const express = require("express");
require("dotenv").config();

const weatherRoute = require("./src/routes/weatherRoute");

//INTIALIZE EXPRESS APLICATION
const app = express();

app.use("/weather", weatherRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server has been started ${port}`);
});
