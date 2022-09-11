const dbConnection = require('../Data/knex')


async function insertNewPointsModel(nameUser, level, points){
  try{
    const newPoints = await dbConnection.from('results').insert({name_user:nameUser,id_level:dbConnection.select('id_level').from('levels').where({level_name:level}),points:points})
    return newPoints
  }catch(err){
    console.log(err)
  }
}

module.exports = {insertNewPointsModel}