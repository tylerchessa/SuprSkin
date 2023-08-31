const express = require("express");
const router = express.Router();
const productsdb = require("../db/queries/productsdb");
const cartdb = require("../db/queries/cartdb");

// Get /cart /:userId  - get cart info
router.get("/:userId", (req, res) => {
  console.log('req.body', req.params)
    let cartData = {};
    cartdb.getCartInfo(req.params.userId)
      .then(cartInfo => {
        console.log(cartInfo)
        return cartdb.getCartProducts(cartInfo.id)
      })
      .then(cartProducts => {
        console.log(cartProducts)
        res.send(cartProducts);
      })
      .catch(error => {
        // Handle error retrieving user info from the database
        console.error('Error getting cart data:', error);
        res.status(500).send('Internal Server Error');
      })
      });

// POST /cart/add - add item to cart
router.post("/add", (req, res) => {
  const productId = req.body.productId
  let cartObj = {};
  cartdb.getCartInfo(req.body.userId)
  .then(cartInfo => {
    cartObj = cartInfo
    // console.log('cartinfo', cartInfo)
    // console.log('product', req.body)
    // console.log('addcartitem', productId, cartInfo.id)
  return cartdb.getCartProductIds(cartInfo.id)
  })
  .then(cartProductInfo => {
    console.log('this', cartProductInfo)
    const existingCartItem = cartProductInfo.find(item => item.product_id === productId);
    if (existingCartItem) {
      return cartdb.addCartQuantity(productId, cartObj.id);
    } else {
  return cartdb.addCartItem(productId, cartObj.id)
    }
  })
    .then(added => {
      res.send(added);
    })
    .catch(error => {
      // Handle error retrieving user info from the database
      console.error('Error posting user vote:', error);
      res.status(500).send('Internal Server Error');
    })
    });



module.exports = router;