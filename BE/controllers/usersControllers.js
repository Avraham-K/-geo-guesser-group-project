const {insertNewPointsModel,getHighScoreEasyModel,getHighScoreHardModel} = require('../models/userModel')

async function insertNewPoints(req,res){
  try{
    const {nameUser,level, points} = req.body
    const nameUserUpper = nameUser.toUpperCase()
    const levelUpper = level.toUpperCase()
    const newPoints = await insertNewPointsModel(nameUserUpper, levelUpper, points)
    res.send(newPoints)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
}
async function getHighScoreEasy(req,res){
  try{
    const highScores = await getHighScoreEasyModel()
    res.send(highScores)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
  
}
async function getHighScoreHard(req,res){
  try{
    const highScores = await getHighScoreHardModel()
    res.send(highScores)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
  
}


module.exports = {insertNewPoints,getHighScoreEasy,getHighScoreHard}