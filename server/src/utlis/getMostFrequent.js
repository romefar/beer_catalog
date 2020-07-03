module.exports = (arr) => {
  const keys = arr.reduce((accum, curVal) => {
    accum[curVal] = (accum[curVal] || 0) + 1;
    return accum;
  }, {});
  const count = Math.max(...Object.values(keys));
  // if max items > 1 return the first one
  const itemName = Object.keys(keys).filter(k => keys[k] === count)[0];
  return itemName;
};
