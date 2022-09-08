const {
  getAllUsersModel,
  loginModael,
} = require("../models/usersModel");


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

module.exports = { getAllUsers, login };
