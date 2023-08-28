const express = require("express");
const router = express.Router();
const categoriesdb = require("../db/queries/categoriesdb");


// GET /categories  - Gets all sorted polls
router.get("/all", (req, res) => {
    categoriesdb.getAllCategories() 
    .then((categories) => {
      res.send(categories);
  });
});

module.exports = router;
