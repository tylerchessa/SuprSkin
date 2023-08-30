const express = require("express");
const router = express.Router();
const userdb = require("../db/queries/userdb");
const cartdb = require("../db/queries/cartdb");
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for password hashing

// POST /signup  - Add new User
router.post("/", (req, res) => {
  console.log('signupForm', req.body)
  let password = req.body.password
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      // Handle error
      console.error('Error hashing password:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Store the hashed password in the database
      const hashedPassword = hash;
      req.body.password = hashedPassword;
      userdb.addNewUser(req.body)
    .then(userInfo => {
      return cartdb.createNewCart()
    })
    .then(userInfo => {
      res.send(userInfo);
    })
    .catch(error => {
      // Handle error saving user info to the database
      console.error('Error adding new user:', error);
      res.status(500).send('Internal Server Error');
    });
    }
  });
});

module.exports = router;