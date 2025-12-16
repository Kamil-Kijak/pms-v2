const express = require("express");

const router = express.Router();

const areaController = require('../controllers/areaController');
const { body } = require("express-validator");

router.post("/insert", [
    body("idLand").trim().
    exists({checkFalsy:true}).withMessage("idLand is required"),
    body("idGroundClass").trim().
    exists({checkFalsy:true}).withMessage("idGroundClass is required"),
    body("area").trim().
    exists({checkFalsy:true}).withMessage("area is required").
    isFloat().withMessage("area is not float value").toFloat(),
    body("releasedArea").trim().default(0).optional({checkFalsy:true}).
    isFloat().withMessage("area is not float value").toFloat()
], areaController.insertArea);

router.post("/update", [
    body("idArea").trim().
    exists({checkFalsy:true}).withMessage("idArea is required"),
    body("idGroundClass").trim().
    exists({checkFalsy:true}).withMessage("idGroundClass is required"),
    body("area").trim().
    exists({checkFalsy:true}).withMessage("area is required").
    isFloat().withMessage("area is not float value").toFloat(),
    body("releasedArea").trim().default(0).optional({checkFalsy:true}).
    isFloat().withMessage("area is not float value").toFloat()
], areaController.updateArea);

router.post("/delete", [
    body("idArea").trim().
    exists({checkFalsy:true}).withMessage("idArea is required")
], areaController.deleteArea);

module.exports = router;