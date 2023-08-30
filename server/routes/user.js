const express = require("express");
const router = express.Router();
const userdb = require("../db/queries/userdb.js");

    // Get /user:username   - get user info
router.get("/:username", (req, res) => {
    userInfo = {};
    userdb.getUserInfoUsername(req.params.username)
      .then(user => {
        res.send(user);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error retrieving user info:', error);
        res.status(500).send('Internal Server Error');
      })
      });

//     // Get search/users/initial - only username, img and id
// router.get("/users/initial", (req, res) => {
//   userdb.getInitialSearchUserData()
//     .then(initialUserData => {
//       res.send(initialUserData);
//     })
//     .catch(error => {
//       // Handle error retrieving user info from the database
//       console.error('Error getting initial polls:', error);
//       res.status(500).send('Internal Server Error');
//     })
//     });

    module.exports = router;