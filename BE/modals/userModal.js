const bcrypt = require("bcrypt");
const { connection } = require("../mysql");

MYSQL = async (sql) => {
  const rows = await queryDB(sql);
  const myDB = await Object.values(JSON.parse(JSON.stringify(rows)));
  return myDB;
};

function queryDB(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function getAllUsersModel() {
  try {
    const sql = "SELECT * FROM users_database.users_info";

    // SQL get all users

    const SQLusers = await MYSQL(sql);
    return SQLusers;
  } catch (err) {
    console.log(err);
  }
}

async function getUserByUserNameModel(userName) {
  try {
    const allUsers = await getAllUsersModel();
    const user = allUsers.find((user) => user.userName === userName);
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function loginModael(userName, password) {
  try {
    const user = await getUserByUserNameModel(userName);
    const validate = await decrypter(password, user.hashedPassword);
    return validate ? user : validate;
  } catch (err) {
    console.log(err);
  }
}

async function encrypter(password) {
  const saltRounds = 10;
  salt = await bcrypt.genSalt(saltRounds);
  hash = await bcrypt.hash(password, salt);
  return hash;
}

async function decrypter(password, passwordHash) {
  const match = await bcrypt.compare(password, passwordHash);
  return match;
}

module.exports = {
  encrypter,
  decrypter,
  getAllUsersModel,
  getUserByUserNameModel,
  loginModael,
};
