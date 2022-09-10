const {createUserModel,insertNewPointsModel} = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()
/*const {
  getAllUsersModel,
  loginModael,
} = require("../models/userModel");



async function getAllUsers(req, res) {
    try {
      const allUsers = await getAllUsersModel();
      res.send(allUsers);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function login(req, res) {
    try {
      const { userName, password } = req.query;
      const userOrPasswordError = await loginModael(userName, password);
      if (userOrPasswordError) {
        res.send(userOrPasswordError);
        return;
      }
      res.status(500).send("User name does not match the password");
    } catch (err) {
      res.status(500).send("User name does not match the password");
    }
  }

  
module.exports = { getAllUsers, login };*/
async function createUser(req,res){
  try{
    const {firstName, lastName, email, password} = req.body
    const password_hash = bcrypt.hashSync(password,3)
    const registerUser = {first_name:firstName,last_name:lastName,email:email,password:password_hash}
    const newUser = await createUserModel(registerUser)
    res.send(newUser)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
 
}
async function insertNewPoints(req,res){
  try{
    const {idUser,idLevel, points} = req.body
    const newPoints = await insertNewPointsModel(idUser, idLevel, points)
    res.send(newPoints)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
}
async function logInUser(req,res){
  try{
      const {user} = req.body
      const token = jwt.sign({id:user.id_user},process.env.TOKEN_SECRET,{expiresIn:'5h'})
      res.cookie('Token',token,{maxAge: 2 * (60 * 60 * 24)})
      res.send({name: user.first_name,token:token,id:user.id_user})
  }catch(err){
      res.status(400).send(err.message)
  }
  
}

module.exports = {createUser,insertNewPoints,logInUser}