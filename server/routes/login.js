const express = require("express");
const router = express.Router();
const userdb = require("../db/queries/userdb");
const bcrypt = require('bcrypt');


// Post /login   - compare login info
router.post("/", (req, res) => {
  console.log(req.body)
  userdb.getUserInfo(req.body.email)
    .then(userInfo => {
      console.log(userInfo)
      const storedHashedPassword = userInfo.password; 
      const password = req.body.password
      console.log(password)

      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          // Handle error
          console.error('Error comparing passwords:', err);
          res.status(500).send('Internal Server Error');
        } else if (result) {
          // Passwords match, user is authenticated
          console.log('Authentication successful');
          res.send(userInfo);
        } else {
          // Passwords do not match, user is not authenticated
          console.log('Authentication failed');
          res.status(401).send('Authentication failed');
        }
      });
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving user info:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;