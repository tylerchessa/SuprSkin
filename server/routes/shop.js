const express = require("express");
const router = express.Router();
const shopdb = require("../db/queries/shopdb");
const categoriesdb = require("../db/queries/categoriesdb");
const productsdb = require("../db/queries/productsdb");

// Get /user:username   - get user info
router.get("/all", (req, res) => {
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

    router.get("/product/:product", (req, res) => {
      let productObj = {};
      productsdb.getProductId(req.params.product)
      .then(productId => {
        productObj.id = productId
        console.log(productId)
        return shopdb.getProduct(productId)
      })
        .then(product => {
          productObj.product = product
          console.log(product)
          return shopdb.getProductPhotos(productObj.id)
        })
        .then(productPhotos => {
          productObj.photos = productPhotos
          console.log(productPhotos)
          return shopdb.getProductIngredients(productObj.id)
        })
        .then(productIngredients => {
          productObj.productIngredients = productIngredients
          console.log(productIngredients)
          return shopdb.getProductBenefits(productObj.id)
        })
        .then(productBenefits => {
          productObj.productBenefits = productBenefits
          console.log(productBenefits)
          res.send(productObj);
        })
        .catch(error => {
          // Handle error retrieving user info from the database
          console.error('Error retrieving category products:', error);
          res.status(500).send('Internal Server Error');
        })
        });


// Get /shop/:category  - get category products
router.get("/:category", (req, res) => {
  categoriesdb.getCategoryId(req.params.category)
  .then(categoryId => {
    console.log(categoryId)
    return shopdb.getAllCategoryProducts(categoryId)
  })
    .then(products => {
      console.log(products)
      res.send(products);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error retrieving category products:', error);
      res.status(500).send('Internal Server Error');
    })
    });

    // Post /user/:username/update  - update user info
router.post("/update", (req, res) => {
  console.log(req.body)
  userdb.updateUserInfo(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error updating user info:', error);
      res.status(500).send('Internal Server Error');
    })
    });

    


module.exports = router;