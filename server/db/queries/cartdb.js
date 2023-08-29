const db = require('../db');

const getCartInfo = (userId) => {
    const queryObj = {
        text: `SELECT * FROM cart WHERE user_id = $1`,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(cartInfo => {
        return cartInfo.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting cart info: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const addCartItem = (productId, cartId) => {
    const queryObj = {
      text: `INSERT INTO cart_product (product_id, cart_id, quantity, created_at, updated_at)
             VALUES ($1, $2, 1, NOW(), NOW());
      `,
      values: [productId, cartId]
      };
    return db
      .query(queryObj)
      .then(productInfo => {
        console.log('benefits', productInfo)
        return productInfo.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error adding cart item: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 


module.exports = {
    addCartItem,
    getCartInfo,
};