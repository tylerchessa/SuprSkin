const db = require('../db');

const getAllCategoryProducts = (categoryId) => {
    const queryObj = {
        text: `SELECT * FROM products WHERE category_id = $1`,
        values: [categoryId]
      };
    return db
      .query(queryObj)
      .then(products => {
        return products.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting category products: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getProductBenefits = (productId) => {
    console.log(productId)
    const queryObj = {
        text: `SELECT *
        FROM product_benefits
        WHERE product_id = $1;
`,
        values: [productId]
      };
    return db
      .query(queryObj)
      .then(productInfo => {
        console.log('benefits', productInfo)
        return productInfo.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting product benefits: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getProductIngredients = (productId) => {
    const queryObj = {
        text: `SELECT *
        FROM product_ingredients
        WHERE product_id = $1;
`,
        values: [productId]
      };
    return db
      .query(queryObj)
      .then(productInfo => {
        return productInfo.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting product ingredients: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 

  const getProductPhotos = (productId) => {
    const queryObj = {
        text: `SELECT *
        FROM product_images
        WHERE product_id = $1;
`,
        values: [productId]
      };
    return db
      .query(queryObj)
      .then(productInfo => {
        return productInfo.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting product photos: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 


  const getProduct = (productId) => {
    const queryObj = {
        text: `SELECT * FROM products WHERE id = $1`,
        values: [productId]
      };
    return db
      .query(queryObj)
      .then(product => {
        return product.rows;
      })
      .catch(function (xhr, status, error) {
        console.log("Error getting product: " + error);
        console.log("xhr: " + xhr);
        console.log("stat: " + status);
      });
  }; 
  


module.exports = {
    getAllCategoryProducts,
    getProduct,
    getProductPhotos,
    getProductIngredients,
    getProductBenefits
};