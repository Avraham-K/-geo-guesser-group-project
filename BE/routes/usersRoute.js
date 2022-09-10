const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersControllers");
//const { userNameExistLogin } = require("../middleware/usersMiddleware");
const {passwordMatch, userAlreadyExist,isAnExistingUser,verifyPassword} = require('../middleware/userMiddleware')


//router.post("/login", userNameExistLogin, UsersController.login);
router.post('/signup',passwordMatch, userAlreadyExist,UsersController.createUser)
router.post('/login',isAnExistingUser,verifyPassword,UsersController.logInUser)
router.post('/newpoints',UsersController.insertNewPoints)



module.exports = router;