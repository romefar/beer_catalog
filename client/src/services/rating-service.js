import fetch from '../utils/fetch';

class RatingService {
  getBeerRating = async (id) => {
    return await fetch(`/rating/beer/${id}`);
  }

  updateBeerRating = async (id, action) => {
    return await fetch(`/rating/beer/${id}?action=${action}`, 'PATCH');
  }
}

const getRatingService = (() => {
  let instance = null;
  return () => {
    if (instance) {
      return instance;
    } else {
      instance = new RatingService();
      return instance;
    }
  };
})();

export default getRatingService;