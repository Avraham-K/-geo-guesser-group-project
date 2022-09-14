const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const { upload, uploadToCloudinary } = require("../middleware/imageMiddleware");

router.get("/", imageController.getImage);
router.get("/easy", imageController.getImageEasy);
router.post("/",upload.single("locationImage"), uploadToCloudinary, imageController.addImage);

module.exports = router;