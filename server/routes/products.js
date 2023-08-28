const express = require("express");
const router = express.Router();
const productsdb = require("../db/queries/productsdb");

// Get /profile:username   - get user info
router.post("/new", (req, res) => {
  let pollData = {};
  pollAnswersdb.createUserVote(req.body)
    .then(voteData => {
      console.log(voteData)
      return pollsdb.getPollData(req.body.poll_id)
    })
    .then(poll => {
    pollData.poll = poll
    return pollOptionsdb.getAllAnswers(req.body.poll_id)
  })
    .then(answers => {     
      pollData.answers = answers   
      console.log(pollData)
      res.send(pollData);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error posting user vote:', error);
      res.status(500).send('Internal Server Error');
    })
    });



module.exports = router;