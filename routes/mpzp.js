
const express = require("express");

const router = express.Router();

const mpzpController = require('../controllers/mpzpController');

router.get("/get-all", mpzpController.getAllMpzp);

router.post("/insert", mpzpController.insertMpzp);

router.post("/insert-file", mpzpController.insertMpzpFile);

router.put("/update", mpzpController.updateMpzp);

router.delete("/delete", mpzpController.deleteMpzp);

module.exports = router;