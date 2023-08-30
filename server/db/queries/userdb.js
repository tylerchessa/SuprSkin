const db = require('../db');

const getAccountData = (userId) => {
    const queryObj = {
        text: `SELECT id, username, email, created_at
        FROM users
        WHERE id = $1;`,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(accountData => {
        return accountData.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting account data: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  // GET - get user info by email
const getUserInfo = (userEmail) => {
  const queryObj = {
    text: `SELECT * FROM users WHERE email = $1;` ,
    values: [userEmail],
  };
  return db
  .query(queryObj)
    .then(userInfo => {
      return userInfo.rows[0];
    })
    .catch(function (xhr, status, error) {
      console.log("Error getting user info: " + error);
      console.log("xhr: " + xhr);
      console.log("stat: " + status);
    });
};

  // GET - get user info by username
  const getUserInfoUsername = (username) => {
    const queryObj = {
      text: `SELECT * FROM users WHERE username = $1;` ,
      values: [username],
    };
    return db
    .query(queryObj)
      .then(userInfo => {
        return userInfo.rows[0];
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting user info: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  };

  const addNewUser = (userInfo) => {
    const queryObj = {
        text: `INSERT INTO users (first_name, last_name, email, username, password, date_of_birth, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, NOW())
        RETURNING id;`, 
        values: [userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.username, userInfo.password, userInfo.birthdate]
      };
    return db
      .query(queryObj)
      .then(accountData => {
        return accountData.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error adding new user: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 





module.exports = {
    getAccountData,
    getUserInfo,
    addNewUser,
    getUserInfoUsername
};