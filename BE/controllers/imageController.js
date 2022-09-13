const { addImageModel, getAllimagesModel, randimizeImageModel } = require("../models/imageModal");

async function getAllimages(req, res) {
    try {
      const allImages = await getAllimagesModel()
      res.send(allImages);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function addImage(req, res) {
    try {
      const { imageUrl, location } = req.body;
      newImage = {
        image_location: imageUrl,
        name_location: location,
      };
      const image = await addImageModel(newImage);
        res.send(image);
      }
    catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  }

  async function getImage(req, res) {
    try {
        const allImages = await getAllimagesModel()
        //// randomize
      
        // randimizeImageModel




    } catch (err) {
      res.status(500).send(err);
    }
  }



  module.exports = { getAllimages, addImage, getImage };







