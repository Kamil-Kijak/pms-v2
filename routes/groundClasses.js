const express = require("express");

const router = express.Router();

const groundClassController = require('../controllers/groundClassController');

router.get("/get", groundClassController.getGroundClasses);

router.get("/count", groundClassController.getGroundClassCount);

router.get("/get-unique", groundClassController.getUniqueGroundClasses);

router.post("/insert", groundClassController.insertGroundClass);

router.put("/update", groundClassController.updateGroundClass);

router.delete("/delete", groundClassController.deleteGroundClass);

module.exports = router;