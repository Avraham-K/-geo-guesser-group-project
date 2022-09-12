const dbConnection = require('../Data/knex')

async function getAllimagesModel() {
    try {
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

  module.exports = {
    getAllimagesModel,
    addImageModel,
    
  };
  