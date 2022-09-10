  const {getUserByEmailModel} = require('../models/userModel')
  const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
/*const { getUserByUserNameModel } = require("../models/usersModel");

async function userNameExistLogin(req, res, next) {
    const user = await getUserByUserNameModel(req.query.userName);
    // change from path to body
    if (user) {
      next();
      return;
    }
    res.status(400).send("User name does not match the password");
  }*/

  function passwordMatch (req,res,next){
    if(req.body.password === req.body.confirmPassword){
        next();
        return ;
    }
    res.status(400).send("Error: Passwords don't match" )
}
async function userAlreadyExist (req,res,next){
  const user = await getUserByEmailModel(req.body.email)
  if(user){
      res.status(400).send('User already exists')
      return
  }
  next();
}
async function isAnExistingUser (req,res,next){
  const user = await getUserByEmailModel(req.body.email)
  console.log(user)
  if(user){
      req.body.user = user
      next()
      return
  }else{
      res.status(400).send('The user does not exist')
  }
  
}

async function verifyPassword(req,res,next){
  const {user} = req.body
  
  bcrypt.compare(req.body.password,user.password,(err,result)=>{
      if(err){
          res.status(500).send(err.message)
          console.log(err.message)
          return
      }
      if(result){
          next()
          return
      }else{
          res.status(400).send('Invalid Password')
      }
  })
}





module.exports = {passwordMatch, userAlreadyExist,isAnExistingUser,verifyPassword}