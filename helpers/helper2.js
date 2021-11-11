const originData = require('../date.json');
const addPriceToData = require('./helper3');

module.exports = function (data) {
  let products = [];
  if (data) {
    products = data;
  } else {
    products = addPriceToData (originData);
    }

  let topPrice = 0;
  let topProduct = {};
  products.forEach((product) => {
    if (product.price > topPrice) {
      topPrice = product.price;
      topProduct = product;
    }
  });

  return topProduct;
};
