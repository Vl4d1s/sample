const placesData = require("../data/places.json");
const HttpError = require("../models/http-error");

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = placesData.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided user id.");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
};

const getPlaceByPlaceId = (req, res, next) => {
  const placeId = req.params.pid;

  const place = placesData.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

module.exports = { getPlaceByUserId, getPlaceByPlaceId };
