
const express = require("express");

const router = express.Router();

const generalPlanController = require('../controllers/generalPlanController');

router.get("/get-all", generalPlanController.getAllGeneralPlans);

router.post("/insert", generalPlanController.insertGeneralPlan);

router.post("/insert-file", generalPlanController.insertGeneralPlansFile);

router.put("/update", generalPlanController.updateGeneralPlan);

router.delete("/delete", generalPlanController.deleteGeneralPlan);

module.exports = router;