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

  changeProfilePassword = async (formData) => {
    return await fetch('/profile/password', 'PATCH', formData);
  }

  deleteProfile = async () => {
    return await fetch('/profile', 'DELETE');
  }

  updateProfileImage = async (formData) => {
    return await fetch('/profile/image/upload', 'POST', formData);
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
