

const express = require("express");

const router = express.Router();

const fileController = require('../controllers/fileController');

router.get("/get", fileController.getFile);

router.post("/upload", fileController.upload.array("files"), fileController.confirmUpload);

router.delete("/delete", fileController.deleteFile);

module.exports = router;