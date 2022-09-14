const { addImageModel, getAllimagesModel, randimizeImageModel ,randimizeImageModelEasy} = require("../models/imageModel");

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
        res.status(200).send(image);
      }
    catch (err) {
      res.status(500).send(err);
    }
  }

  async function getImage(req, res) {
    try {
      const allImages = await getAllimagesModel();
      const obj = randimizeImageModel(allImages);
        res.status(200).send(obj);


    } catch (err) {
      res.status(500).send(err);
    }
  }

  
  async function getImageEasy(req, res) {
    try {
      const allImages = await getAllimagesModel();
      const obj = randimizeImageModelEasy(allImages);
        res.status(200).send(obj);


    } catch (err) {
      res.status(500).send(err);
    }
  }


  module.exports = { getAllimages, addImage, getImage, getImageEasy };







