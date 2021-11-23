const fruitsJsonData = require('./date.json');
const {
  helper1: filter,
  helper2: getTopPriceProduct,
  helper3: formatProduct,
} = require('./helpers');

function boot(fruitsData) {
  const fruitsWithPrice = formatProduct(fruitsData);
  console.log(fruitsWithPrice);
  const filterItemOrange = filter(fruitsWithPrice, 'item', 'orange');
  const filterItemWeightFour = filter(fruitsWithPrice, 'weight', 4);
  const commonItems = [...filterItemOrange, ...filterItemWeightFour];
  console.log(commonItems);
  const productWithMaxPrice = getTopPriceProduct(commonItems);
  console.log(productWithMaxPrice);
  const defaultProducts = getTopPriceProduct();
  console.log(defaultProducts);
}
boot(fruitsJsonData);
