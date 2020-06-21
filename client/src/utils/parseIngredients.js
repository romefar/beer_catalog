const parseIngredients = (ingredients, water) => {
  const { malt, hops } = ingredients;
  const maltArr = malt.map(item => {
    return `"${item.name}" - ${item.amount.value} ${item.amount.unit}`;
  });
  const hopsArr = hops.map(item => {
    return `"${item.name}" (${item.attribute}) - ${item.amount.value} ${item.amount.unit}, ${item.add}`;
  });
  const waterLabel = `${water.value} ${water.unit}`;
  return [{
    title: 'Water',
    data: [waterLabel]
  }, {
    title: 'Malt',
    data: maltArr
  }, {
    title: 'Hops',
    data: hopsArr
  }, {
    title: 'Yeast',
    data: [ingredients.yeast]
  }];
};

export default parseIngredients;
