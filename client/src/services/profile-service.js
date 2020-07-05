import fetch from '../utils/fetch';

class ProfileService {
  addBeerToFavourites = async (id) => {
    return await fetch(`/api/v1/profile/beer/favourites/${id}`, 'PATCH');
  }

  getProfileData = async () => {
    return await fetch('/api/v1/profile');
  }

  getBeerFavouritesList = async () => {
    return await fetch('/api/v1/profile/beer/favourites');
  }

  removeBeerFromFavourites = async (id) => {
    return await fetch(`/api/v1/profile/beer/favourites/${id}`, 'DELETE');
  }

  changeProfilePassword = async (formData) => {
    return await fetch('/api/v1/profile/password', 'PATCH', formData);
  }

  deleteProfile = async () => {
    return await fetch('/api/v1/profile', 'DELETE');
  }

  updateProfileImage = async (formData) => {
    return await fetch('/api/v1/profile/image/upload', 'POST', formData);
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
