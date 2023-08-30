const db = require('../db');

const getCartInfo = (userId) => {
    console.log('getcartinfo', userId)
    const queryObj = {
        text: `SELECT * FROM cart WHERE user_id = $1`,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(cartInfo => {
        console.log('cartInfo', cartInfo.rows[0])
        return cartInfo.rows[0];
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting cart info: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getCartProducts = (cartId) => {
    console.log('cartId', cartId)
    const queryObj = {
        text: `
          SELECT cart_product.*, products.name AS product_name, products.description AS product_description, products.price AS product_price
          FROM cart_product
          JOIN products ON cart_product.product_id = products.id
          WHERE cart_product.cart_id = $1
        `,
        values: [cartId]
      };
      
    return db
      .query(queryObj)
      .then(cartProducts => {
        console.log('cartProducts', cartProducts.rows)
        return cartProducts.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting cart products: " + error);
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
    console.log(userId)
    const queryObj = {
      text: `INSERT INTO cart (user_id, created_at, updated_at)
             VALUES ($1, NOW(), NOW());
      `,
      values: [userId[0].id]
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
    getCartProducts,
    createNewCart
};