const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const errorHandler = require("./middlewares/error-handler");
const placesRoutes = require("./routes/places-routes");

const createServer = () => {
  const app = express();
  app
    .use(json())
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use("/api/v1/places", placesRoutes)
    .use(errorHandler);

  return app;
};

module.exports = { createServer };
