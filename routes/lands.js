
const express = require("express");

const router = express.Router();

const landController = require('../controllers/landController');

router.get("/serial-exist", landController.getSerialExist);

router.get("/get-one", landController.getLand);

router.get("/get", landController.getLands);

router.get("/get-rent", landController.getRentLands);

router.get("/get-insertion-data", landController.getLandInsertionRequiredData);

router.post("/insert", landController.insertLand);

router.put("/update", landController.updateLand);

router.delete("/delete", landController.deleteLand);

module.exports = router;