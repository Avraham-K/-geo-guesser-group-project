/*const multer = require("multer");
/*const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const upload = multer({ dest: "../images" });

const imageUrl = (req, res, next) => {
  try {
    console.log(req.file);
    const imageUrl = "http://localhost:8081/" + req.file.path;
    req.body.imageUrl = imageUrl;
    next();
  } catch (err) {
    res.status(500).send(err);
  }
};

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});
// add cloudinary API key


function uploadToCloudinary(req, res, next) {
  if (!req.file) {
    res.status(400).send("No image attached");
    return;
  }
  cloudinary.uploader.upload(req.file.path, (err, result) => {
   if(err) {
    res.status(500).send(err.message);
    return
   }
   if(result) {
    req.body.imageUrl = result.secure_url
    fs.unlinkSync(req.file.path)
    next()
   }
  });
}*/

//module.exports = { upload, imageUrl, uploadToCloudinary };
