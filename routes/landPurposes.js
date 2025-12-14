
const express = require("express");

const router = express.Router();

const landPurposeController = require('../controllers/landPurposeController');

router.get("/get-all", landPurposeController.getAllLandPurposes);

router.post("/insert", landPurposeController.insertLandPurpose);

router.post("/insert-file", landPurposeController.insertLandPurposesFile);

router.put("/update", landPurposeController.updateLandPurpose);

router.delete("/delete", landPurposeController.deleteLandPurpose);

module.exports = router;