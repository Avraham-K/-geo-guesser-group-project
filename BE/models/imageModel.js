const dbConnection = require('../Data/knex')

async function getAllimagesModel() {
    try {
      // let num = Math.floor(Math.random() * 10);
       
      // const images = await dbConnection.from('locations').where({id_location:[num]}).first();
      const images = await dbConnection.from('locations')
        return images;
      } catch (err) {
        console.log(err);
      }
  }

  async function addImageModel(newImage) {
    try {
      const imageAdded = await dbConnection.from('locations').insert(newImage)
      return imageAdded
    } catch (err) {
      console.log(err);
    }
  }

  function randimizeImageModel(allImages) {
    const totalImages = allImages.length;
    // console.log("allImages:", allImages)
    let selectedImages = [];
    let imageId = [];
    let i=0;
    while (i < 8) {
      let randomImage = Math.floor(Math.random() * totalImages);
      if (!imageId.includes(randomImage)){
        imageId.push(randomImage);
        selectedImages.push(allImages[randomImage]);
        i++;
      }
    }
    // console.log("selectedImages", selectedImages );
    let correctAnser = Math.floor(Math.random() * 7);
    let obj = {};
    for (let i = 0; i < 8; i++) {
      if (i===correctAnser){
        obj.image_location = selectedImages[i].image_location;
        obj.correct = i;
      }
      obj[i] = selectedImages[i].name_location;
    }
    // console.log("here2", obj );
    return obj;
  }

  function randimizeImageModelEasy(allImages) {
    const totalImages = allImages.length;
    // console.log("allImages:", allImages)
    let selectedImages = [];
    let imageId = [];
    let i=0;
    while (i < 4) {
      let randomImage = Math.floor(Math.random() * totalImages);
      if (!imageId.includes(randomImage)){
        imageId.push(randomImage);
        selectedImages.push(allImages[randomImage]);
        i++;
      }
    }
    // console.log("selectedImages", selectedImages );
    let correctAnser = Math.floor(Math.random() * 3);
    let obj = {};
    for (let i = 0; i < 4; i++) {
      if (i===correctAnser){
        obj.image_location = selectedImages[i].image_location;
        obj.correct = i;
      }
      obj[i] = selectedImages[i].name_location;
    }
    // console.log("here2", obj );
    return obj;
  }


  module.exports = {
    getAllimagesModel,
    addImageModel,
    randimizeImageModel,
    randimizeImageModelEasy
  };
  