const { connection } = require("../mysql");

MYSQL = async (sql) => {
  const rows = await queryDB(sql);
  const myDB = await Object.values(JSON.parse(JSON.stringify(rows)));
  return myDB;
};

function queryDB(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function getAllimagesModel() {
    try {
        const sql = "";
    
        // SQL get all images
    
        const SQLimages = await MYSQL(sql);
        return SQLimages;
      } catch (err) {
        console.log(err);
      }
  }

  async function addImageModel(newImage) {
    try {
      const sql = ``;
    // SQL add image


      const SQLanswer = await MYSQL(sql);

        // return answer from SQL

      return SQLanswer;
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getAllimagesModel,
    addImageModel,
    
  };
  