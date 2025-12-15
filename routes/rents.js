
const express = require("express");

const router = express.Router();

const rentController = require('../controllers/rentController');

router.post("/insert", rentController.insertRent);

router.put("/update", rentController.updateRent);

router.delete("/delete", rentController.deleteRent);

module.exports = router;