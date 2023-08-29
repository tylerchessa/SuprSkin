const express = require("express");
const router = express.Router();
const productsdb = require("../db/queries/productsdb");
const cartdb = require("../db/queries/cartdb");

// Get /cart   - get cart info
router.get("/", (req, res) => {
    let cartData = {};
    cartdb.getCartInfo(req.body)
      .then(cartInfo => {
        console.log(cartInfo)
    //     return pollsdb.getPollData(req.body.poll_id)
    //   })
    //   .then(poll => {
    //   pollData.poll = poll
    //   return pollOptionsdb.getAllAnswers(req.body.poll_id)
    // })
    //   .then(answers => {     
    //     pollData.answers = answers   
    //     console.log(pollData)
        res.send(cartInfo);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error posting user vote:', error);
        res.status(500).send('Internal Server Error');
      })
      });

// POST /cart/new  - add item to cart
router.post("/new", (req, res) => {
  cartdb.addCartItem(req.body)
    .then(voteData => {
      console.log(voteData)
//       return pollsdb.getPollData(req.body.poll_id)
//     })
//     .then(poll => {
//     pollData.poll = poll
//     return pollOptionsdb.getAllAnswers(req.body.poll_id)
//   })
//     .then(answers => {     
//       pollData.answers = answers   
//       console.log(pollData)
      res.send(voteData);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error posting user vote:', error);
      res.status(500).send('Internal Server Error');
    })
    });



module.exports = router;