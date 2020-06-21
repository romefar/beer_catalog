const parseBrewMethods = (method) => {
  const { mash_temp, fermentation, twist } = method;
  const mashArr = mash_temp.map(item => {
    return `${item.duration} minutes at ${item.temp.value} ${item.temp.unit}`;
  });
  const fermentationArr = [fermentation].map(item => {
    return `Perform at ${item.temp.value} ${item.temp.unit}`;
  });
  if (twist) {
    return [{
      title: 'Mash',
      data: [mashArr]
    }, {
      title: 'Fermentation',
      data: [fermentationArr]
    }, {
      title: 'Twist',
      data: [twist]
    }];
  }
  return [{
    title: 'Mash',
    data: [mashArr]
  }, {
    title: 'Fermentation',
    data: [fermentationArr]
  }];
};

export default parseBrewMethods;
