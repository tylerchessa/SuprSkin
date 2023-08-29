const db = require('../db');

const getOrderCount = (userId) => {
    const queryObj = {
        text: `SELECT COUNT(*) AS order_count
        FROM orders
        WHERE user_id = $1;
        `,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(orderCount => {
        return orderCount.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting order count: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 


  const getOrderHistory = (userId) => {
    const queryObj = {
        text: `SELECT id, date, total_price, status
        FROM orders
        WHERE user_id = $1
        ORDER BY date DESC;
        `,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(orderHistory => {
        return orderHistory.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting order history: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getOrderDetail = (userId) => {
    const queryObj = {
        text: `SELECT orders.id, orders.date, orders.total_price, orders.status, 
        order_products.product_id, products.name, order_products.quantity, products.price
 FROM orders
 JOIN order_products ON orders.id = order_products.order_id
 JOIN products ON order_products.product_id = products.id
 WHERE orders.id = $1; 
        `,
        values: [userId]
      };
    return db
      .query(queryObj)
      .then(orderDetail => {
        return orderDetail.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting order detail: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

module.exports = {
    getOrderCount,
    getOrderHistory,
    getOrderDetail
};