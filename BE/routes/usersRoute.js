const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersControllers");





router.post('/newpoints',UsersController.insertNewPoints)



module.exports = router;