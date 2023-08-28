const express = require("express");
const router = express.Router();
const userdb = require("../db/queries/userdb");
const pollsdb = require("../db/queries/pollsdb");
const pollOptionsdb = require("../db/queries/pollOptionsdb");
const followersdb = require("../db/queries/followersdb");


    // Post /profile:username   - add friend
    router.post("/add/:username", (req, res) => {
      const userInfo = {};
      console.log(req.body)
      userInfo.send = req.body.currentUserId
      userdb.getUserInfoUsername(req.params.username)
      .then(user => {
        userInfo.receive = user.id;
        if (user.private) {
          return userdb.addFollowerRequest(userInfo);
        } else {
          return userdb.addFollower(userInfo);
        }
      })
        .then(( ) => {
          res.send(true);
        })
        .catch(error => {
          // Handle error retrieving user info from the database
          console.error('Error retrieving user info:', error);
          res.status(500).send('Internal Server Error');
        })
        });

        
// Get /profile:username   - get user info
router.get("/:username", (req, res) => {
  userInfo = {};
  userdb.getUserInfoUsername(req.params.username)
    .then(user => {
      userInfo.user = user;
      return pollsdb.getPollsForUser(req.params.username)
    })
      .then(userPolls => {
        userInfo.polls = userPolls
        return pollOptionsdb.getAnswersForUserPolls(userInfo.user.id)
    })
    .then(pollAnswers => {
      userInfo.pollAnswers = pollAnswers;
      return followersdb.getFollowers(userInfo.user.id)
    })
    .then (followers => {
      userInfo.followers = followers
      return followersdb.getFollowerRequests(userInfo.user.id)
    })
    .then (followerRequests => {
      userInfo.followerRequests = followerRequests
      return followersdb.getFollowing(userInfo.user.id)
    })
    .then (following => {
      userInfo.following = following
      res.send(userInfo);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving user info:', error);
      res.status(500).send('Internal Server Error');
    })
    });




module.exports = router;