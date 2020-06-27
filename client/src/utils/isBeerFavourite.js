export const isFavourite = (id, favourites) => {
  return favourites.map(item => item.beerId).includes(id);
};
