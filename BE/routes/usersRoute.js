const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");
const { userNameExistLogin } = require("../middleware/usersMiddleware");


router.post("/login", userNameExistLogin, UsersController.login);


module.exports = router;