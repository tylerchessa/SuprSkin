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


module.exports = {
    getAccountData,
};