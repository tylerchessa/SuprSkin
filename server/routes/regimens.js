const express = require("express");
const router = express.Router();
const regimensdb = require('../db/queries/regimensdb');
const productsdb = require("../db/queries/productsdb");

// GET /regimens
router.get("/", (req, res) => {
  let regimenData = {};   
  regimensdb.getRegimenData()
  .then(regimens => {    
    regimenData.regimens = regimens
  //   return productsdb.getAllAnswers(req.params.id)
  // })
  //   .then(answers => {     
  //     pollData.answers = answers   
  //     console.log(pollData)
      res.send(regimenData);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error getting poll data:', error);
      res.status(500).send('Internal Server Error');
    })
    });

// POST /polls/new - Create new poll
// router.post("/new", (req, res) => {
//   pollsdb.createPoll(req.body.pollInfo)
//     .then((pollInfo) => {
//       const pollObj = { pollInfo };
//       const optionInfo = req.body.optionInfo;
//       optionInfo.pollId = pollInfo[0].id
//       const queryPromises = [];
//       console.log(pollInfo)
//       console.log('OPTIONINFO', optionInfo)

//       const queryObj1 = {
//         text: `INSERT INTO poll_options (poll_id, poll_text) 
//         VALUES ($1, $2) RETURNING *;`,
//         values: [optionInfo.pollId, optionInfo.option1],
//       };

//       const queryObj2 = {
//         text: `INSERT INTO poll_options (poll_id, poll_text) 
//         VALUES ($1, $2) RETURNING *;`,
//         values: [optionInfo.pollId, optionInfo.option2],
//       };

//       const queryObj3 = {
//         text: `INSERT INTO poll_options (poll_id, poll_text) 
//         VALUES ($1, $2) RETURNING *;`,
//         values: [optionInfo.pollId, optionInfo.option3],
//       };

//       const queryObj4 = {
//         text: `INSERT INTO poll_options (poll_id, poll_text) 
//         VALUES ($1, $2) RETURNING *;`,
//         values: [optionInfo.pollId, optionInfo.option4],
//       };

//       optionInfo.option1 && queryPromises.push(pollOptionsdb.createPollOption(queryObj1));
//       optionInfo.option2 && queryPromises.push(pollOptionsdb.createPollOption(queryObj2));
//       optionInfo.option3 && queryPromises.push(pollOptionsdb.createPollOption(queryObj3));
//       optionInfo.option4 && queryPromises.push(pollOptionsdb.createPollOption(queryObj4));

//       Promise.all(queryPromises)
//         .then((optionInfo) => {
//           pollObj.optionInfo = optionInfo;
//           res.send(pollObj);
//         })
//         .catch((error) => {
//           // Handle error during poll options creation
//           res.status(500).send("Error creating poll options.");
//         });
//     })
//     .catch((error) => {
//       // Handle error during poll creation
//       res.status(500).send("Error creating poll.");
//     });
// });

module.exports = router;


