const {insertNewPointsModel} = require('../models/userModel')

async function insertNewPoints(req,res){
  try{
    const {nameUser,level, points} = req.body
    const nameUserUpper = nameUser.toUpperCase()
    const newPoints = await insertNewPointsModel(nameUserUpper, level, points)
    res.send(newPoints)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
}



module.exports = {insertNewPoints}