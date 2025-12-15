const express = require("express");

const router = express.Router();

const areaController = require('../controllers/areaController');

router.post("/insert", areaController.insertArea);

router.post("/update", areaController.updateArea);

router.post("/delete", areaController.deleteArea);

module.exports = router;