const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersControllers");
//const { userNameExistLogin } = require("../middleware/usersMiddleware");


//router.post("/login", userNameExistLogin, UsersController.login);
router.post('/signup',UsersController.createUser)
router.post('/newpoints',UsersController.insertNewPoints)



module.exports = router;