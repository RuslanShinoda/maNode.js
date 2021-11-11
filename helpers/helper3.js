module.exports = function (data) {
  const productsWithPrice = data.map((product) => {
    let price;
    if (product.pricePerKilo) {
      price =
        Number(product.pricePerKilo.replace('$', '').replace(',', '.')) *
        product.weight;
    } else if (product.pricePerItem) {
      price =
        Number(product.pricePerItem.replace('$', '').replace(',', '.')) *
        product.quantity;
    }
    return { ...product, price };
  });
  return productsWithPrice;
};
