const db = require('../db');

const getCartInfo = (obj) => {
    console.log(obj)
    const queryObj = {
        text: `SELECT * FROM cart WHERE user_id = $1`,
        values: [obj.userId]
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

  const createNewCart = (userId) => {
    const queryObj = {
      text: `INSERT INTO cart (user_id, created_at, updated_at)
             VALUES ($1, NOW(), NOW());
      `,
      values: [userId]
      };
    return db
      .query(queryObj)
      .then(cart => {
        return cart.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error creating new cart: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 


module.exports = {
    addCartItem,
    getCartInfo,
    createNewCart
};