const express = require("express");
const corsMiddleware = require("./src/middlewares/corsMiddleware");
const rateLimitMiddleware = require("./src/middlewares/ratelimitMiddleware");
const errorHandlerMiddleware = require("./src/middlewares/errorHandler");

require("dotenv").config();

const weatherRoute = require("./src/routes/weatherRoute");

//INTIALIZE EXPRESS APLICATION
const app = express();

app.use("/weather", weatherRoute);
app.use(corsMiddleware);
app.use(rateLimitMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server has been started ${port}`);
});
