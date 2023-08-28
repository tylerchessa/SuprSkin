const db = require('../db');

const getAllCategoryProducts = (categoryId) => {
    const queryObj = {
        text: `SELECT * FROM products WHERE category_id = $1`,
        values: [categoryId]
      };
    return db
      .query(queryObj)
      .then(products => {
        return products.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting category products: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getProduct = (productId) => {
    const queryObj = {
        text: `SELECT * FROM product WHERE product_id = $1`,
        values: [productId]
      };
    return db
      .query(queryObj)
      .then(product => {
        return product.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting product: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 
  


module.exports = {
    getAllCategoryProducts,
    getProduct
};