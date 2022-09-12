const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersControllers");


router.post('/newpoints',UsersController.insertNewPoints)
router.get('/highscoreeasy',UsersController.getHighScoreEasy)
router.get('/highscorehard',UsersController.getHighScoreHard)


module.exports = router;