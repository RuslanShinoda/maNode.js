module.exports = function () {
  // const price = data.map ( data => )
  const dataPrice = require('../date.json');
  const newKey = {
    ...dataPrice,
    price: '4',
  };
  return newKey;
  // return quantity + price;
};
console.log(newKey);
