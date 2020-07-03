module.exports = (ingredients) => {
  let maltArr = [];
  let hopsArr = [];
  if (ingredients.malt.length > 0) {
    maltArr = ingredients.malt.map(item => item.name.toLowerCase().split(' ').join('_'));
  }
  if (ingredients.hops.length > 0) {
    hopsArr = ingredients.hops.map(item => item.name.toLowerCase().split(' ').join('_'));
  }
  return [maltArr.join(','), hopsArr.join(',')];
}