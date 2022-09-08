const { v4: uuidv4 } = require("uuid");
const { addImageModel, getAllimagesModel, randimizeImageModel } = require("../models/imageModel");

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
        id: uuidv4(),
        imageUrl: imageUrl,
        location: location,
      };
      const image = await addImageModel(newImage);
      if (image) {
        res.send(image);
        return;
      }
    } catch (err) {
      res.status(500).send(err);
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







