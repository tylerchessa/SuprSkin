const db = require('../db');

const getRegimenData = () => {
  const queryObj = {
    text: `SELECT
    r.id AS regimen_id,
    r.title AS regimen_title,
    array_agg(p.id || ':' || p.name) AS product_info
  FROM regimens r
  LEFT JOIN regimen_products rp ON r.id = rp.regimen_id
  LEFT JOIN products p ON rp.product_id = p.id
  GROUP BY r.id, r.title;
  `,
  };      
  return db
    .query(queryObj)
    .then(regimens => {
        console.log(regimens)
      return regimens.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error getting followers: " + error);
      console.log("xhr: " + xhr);
      console.log("stat: " + status);
    });
};


module.exports = {
    getRegimenData
};