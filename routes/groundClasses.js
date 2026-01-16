const express = require("express");

const router = express.Router();

const groundClassController = require('../controllers/groundClassController');
const { query, body } = require("express-validator");
const authorization = require("../middlewares/authorization");
const roleAuthorization = require("../middlewares/roleAuthorization");

// api/ground-classes

router.use(authorization());

router.get("/get", groundClassController.getGroundClasses);

router.get("/count",[
    query("groundClass").trim().
    exists({checkFalsy:true}).withMessage("groundClass is required"),
], groundClassController.getGroundClassCount);

router.get("/unique", groundClassController.getUniqueGroundClasses);

router.use(roleAuthorization(["KSIEGOWOSC", "SEKRETARIAT"]));

router.post("/insert", [
    body("groundClass").trim().
    exists({checkFalsy:true}).withMessage("groundClass is required").
    isLength({max:10}).withMessage("groundClass must be less or equal 10 characters"),
    body("convertersData").trim().
    exists({checkFalsy:true}).withMessage("convertersData is required").
    isArray({min:4, max:4}).withMessage("convertersData must have 3 elements"),
    body("convertersData.*").
    isFloat({min:0, max:9}).withMessage("converter in convertersData must be a float positive value less than 10").toFloat(),
    body("tax").trim().
    exists({checkFalsy:true}).withMessage("tax is required").
    isIn(["rolny", "lesny", "brak"]).withMessage("tax is not whitelisted")
], groundClassController.insertGroundClass);

router.put("/update", [
    body("idGroundClass").trim().
    exists({checkFalsy:true}).withMessage("idGroundClass is required"),
    body("groundClass").trim().
    exists({checkFalsy:true}).withMessage("groundClass is required").
    isLength({max:10}).withMessage("groundClass must be less or equal 10 characters"),
    body("convertersData").trim().
    exists({checkFalsy:true}).withMessage("convertersData is required").
    isArray({min:4, max:4}).withMessage("convertersData must have 3 elements"),
    body("convertersData.*").
    isFloat({min:0, max:9}).withMessage("converter in convertersData must be a float positive value less than 10").toFloat(),
    body("tax").trim().
    exists({checkFalsy:true}).withMessage("tax is required").
    isIn(["rolny", "lesny", "brak"]).withMessage("tax is not whitelisted")
], groundClassController.updateGroundClass);

router.delete("/delete", [
    body("idGroundClass").trim().
    exists({checkFalsy:true}).withMessage("idGroundClass is required"),
], groundClassController.deleteGroundClass);

module.exports = router;