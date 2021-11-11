const fruitsData = require('./date.json');
const { helper1: filter, helper3, helper2 } = require('./helpers');

const filterFruits = filter(fruitsData, 'item', 'orange');

console.log(`There are orange fruits ${JSON.stringify(filterFruits)}`);

const fruitsWithWeight4 = filter(fruitsData, 'weight', 4);

console.log(`There are fruits ${JSON.stringify(fruitsWithWeight4)}`);

const fruitsWithPrice = helper3(fruitsData);
console.log(helper2());

// const { helper2: dataPrice } = require('./helpers');

// const theHighestPrice = dataPrice(fruitsData);
