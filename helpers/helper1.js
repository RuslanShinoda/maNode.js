module.exports = function (data, key, value) {
  return data.filter((product) => product[key] === value);
};
  