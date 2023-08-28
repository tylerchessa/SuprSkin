const db = require('../db');

const getAllCategories = () => {
  const queryObj = {
    text: `SELECT * from categories`,
  };      
  return db
    .query(queryObj)
    .then(categories => {
      return categories.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error getting categories: " + error);
      console.log("xhr: " + xhr);
      console.log("stat: " + status);
    });
};

const getCategoryId = (categoryName) => {
  console.log(categoryName)
    const queryObj = {
      text: `SELECT id FROM categories WHERE name ILIKE $1`,
      values: [categoryName]
    };
    return db
      .query(queryObj)
      .then(result => {
          return result.rows[0].id;
      })
      .catch(function (error) {
        console.log("Error getting category ID: " + error);
        throw error;
      });
  };
  




module.exports = {
    getAllCategories,
    getCategoryId
};