
const express = require("express");

const router = express.Router();

const landTypeController = require('../controllers/landTypeController');

router.get("/get-all", landTypeController.getAllLandTypes);

router.post("/insert", landTypeController.insertLandType);

router.post("/insert-file", landTypeController.insertLandTypesFile);

router.put("/update", landTypeController.updateLandType);

router.delete("/delete", landTypeController.deleteLandType);

module.exports = router;