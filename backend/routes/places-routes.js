const express = require("express");
const placesController = require("../controllers/places-controller");

const router = express.Router();

/**
 * @route   POST api/v1/places/:pid
 * @desc    Get a place by ID
 * @access  Public
 */
router.get("/:pid", placesController.getPlaceByPlaceId);

/**
 * @route   GET api/v1/places/user/:uid
 * @desc    Get a place by user ID
 * @access  Public
 */
router.get("/user/:uid", placesController.getPlaceByUserId);

module.exports = router;
