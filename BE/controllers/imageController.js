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
        imageUrl: imageUrl,
        location: location,
      };
      const image = await addImageModel(newImage);
        res.status(200).send(image);
      }
    catch (err) {
      res.status(500).send(err);
    }
  }

  async function getImage(req, res) {
    try {
        const allImages = await getAllimagesModel()
      
        // randimizeImageModel


    } catch (err) {
      res.status(500).send(err);
    }
  }



  module.exports = { getAllimages, addImage, getImage };






