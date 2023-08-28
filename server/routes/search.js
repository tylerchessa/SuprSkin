const express = require("express");
const router = express.Router();
const pollsdb = require("../db/queries/pollsdb.js");
const userdb = require("../db/queries/userdb.js");

// Get /search/polls/initial - only question_text, id, and created user
router.get("/polls/initial", (req, res) => {
  pollsdb.getInitialSearchPollData()
    .then(initialPollData => {  
      res.send(initialPollData);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error getting initial polls:', error);
      res.status(500).send('Internal Server Error');
    })
    });

    // Get search/users/initial - only username, img and id
router.get("/users/initial", (req, res) => {
  userdb.getInitialSearchUserData()
    .then(initialUserData => {
      res.send(initialUserData);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error getting initial polls:', error);
      res.status(500).send('Internal Server Error');
    })
    });

    module.exports = router;