const db = require('../db');

const getProductId = (productName) => {
    console.log(productName)
      const queryObj = {
        text: `SELECT id FROM products WHERE name ILIKE $1`,
        values: [productName]
      };
      return db
        .query(queryObj)
        .then(result => {
            return result.rows[0].id;
        })
        .catch(function (error) {
          console.log("Error getting product ID: " + error);
          throw error;
        });
    };



module.exports = {
    getProductId
};