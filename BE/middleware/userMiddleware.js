const { getUserByUserNameModel } = require("../models/usersModel");

async function userNameExistLogin(req, res, next) {
    const user = await getUserByUserNameModel(req.query.userName);
    // change from path to body
    if (user) {
      next();
      return;
    }
    res.status(400).send("User name does not match the password");
  }
