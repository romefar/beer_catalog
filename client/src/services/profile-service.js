import fetch from '../utils/fetch';

class ProfileService {
  addBeerToFavourites = async (id) => {
    return await fetch(`/profile/beer/favourites/${id}`, 'PATCH');
  }

  getBeerFavouritesList = async () => {
    return await fetch('/profile/beer/favourites');
  }

  removeBeerFromFavourites = async (id) => {
    return await fetch(`/profile/beer/favourites/${id}`, 'DELETE');
  }
}

const getProfileService = (() => {
  let instance = null;
  return () => {
    if (instance) {
      return instance;
    } else {
      instance = new ProfileService();
      return instance;
    }
  };
})();

export default getProfileService;
