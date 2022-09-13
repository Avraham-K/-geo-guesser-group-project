const dbConnection = require('../Data/knex')

async function getAllimagesModel() {
    try {
      let num = Math.floor(Math.random() * 10);
        const images = await dbConnection.from('locations').where({id_location:[num]}).first();
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
    let selectedImages = [];
    let i=0;
    // 8 answers for 10 questions
    while (i < 80) {
      let randomImage = Math.floor(Math.random() * totalImages);
      if (!selectedImages.some(randomImage)){
        selectedImages[i]= randomImage;
        i++;
      }
    }
    return selectedImages;
  }

  module.exports = {
    getAllimagesModel,
    addImageModel,
    randimizeImageModel
  };
  