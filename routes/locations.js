const express = require("express");

const router = express.Router();

const locationController = require('../controllers/locationController');

router.get("/get", locationController.getLocations);

router.get("/get-towns", locationController.getTowns);

router.put("/update", locationController.updateLocation);

router.delete("/delete", locationController.updateLocation);

module.exports = router;