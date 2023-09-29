const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/error-handler");
const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use("/api/v1/places", placesRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
