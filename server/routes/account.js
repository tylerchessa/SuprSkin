const express = require("express");
const router = express.Router();
const productsdb = require("../db/queries/productsdb");
const cartdb = require("../db/queries/cartdb");
const userdb = require("../db/queries/userdb");
const orderdb = require("../db/queries/orderdb");

// Get /account   - get account data
router.get("/", (req, res) => {
    let accountData = {};
    userdb.getAccountData(req.body)
    .then(accountData => {
        accountData.accountData = accountData
        console.log(accountData)
        return orderdb.getOrderCount(accountData.id)
      })
      .then(orderCount => {
        accountData.orderCount = orderCount
        console.log(orderCount)
        res.send(orderCount);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error getting account data:', error);
        res.status(500).send('Internal Server Error');
      })
      });

// Get /account/order/history   - get order history
router.get("/order/history", (req, res) => {
    let orderData = {};
    orderdb.getOrderHistory(req.body)
      .then(orderHistory => {
        console.log(orderHistory)
        res.send(orderHistory);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error getting order history:', error);
        res.status(500).send('Internal Server Error');
      })
      });

      // Get /account/order/:id  - get order history
router.get("/order/:id", (req, res) => {
    orderdb.getOrderDetail(req.params.id)
      .then(orderDetail => {
        console.log(orderDetail)
        res.send(orderDetail);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error getting order detail:', error);
        res.status(500).send('Internal Server Error');
      })
      });


module.exports = router;