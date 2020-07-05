import fetch from '../utils/fetch';

class RatingService {
  getBeerRatingValueOnly = async (id) => {
    return await fetch(`/api/v1/rating/beer/${id}/value`);
  }

  getBeerRatingFull = async (id) => {
    return await fetch(`/api/v1/rating/beer/${id}`);
  }

  updateBeerRating = async (id, action) => {
    return await fetch(`/api/v1/rating/beer/${id}?action=${action}`, 'PATCH');
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
