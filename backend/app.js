const express = require("express");
const usersRoutes = require("./routes/users-routes");
const placesRoutes = require("./routes/places-routes");

const app = express();

const PORT = 3000;

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/places", placesRoutes);

app.use((req, res, next) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.status || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
