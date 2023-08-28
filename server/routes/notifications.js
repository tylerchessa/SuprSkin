const express = require("express");
const router = express.Router();
const notificationsdb = require("../db/queries/notificationsdb");


// Post /notifications/acceptFriend    - post notification response
router.post("/acceptFriend", (req, res) => {
  console.log(req.body)
  notificationsdb.addFriendRequest(req.body)
    .then(userNotifications => {
      console.log(userNotifications)
      return notificationsdb.declineFriendRequest(req.body.request_id)
    })
    .then (data => {
      res.send(data);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving user info:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Post /notifications/declineFriend   - post notification response
router.post("/declineFriend", (req, res) => {
  console.log(req.body)
  notificationsdb.declineFriendRequest(req.body.request_id)
    .then(userNotifications => {
      console.log(userNotifications)
      res.send(userNotifications);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving user info:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Get /notifications   - get notification data
router.get("/:userId", (req, res) => {
  // console.log(req.params.userId)
  notificationsdb.getFriendRequestNotifications(req.params.userId)
    .then(userNotifications => {
      console.log(userNotifications)
      res.send(userNotifications);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving user info:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;