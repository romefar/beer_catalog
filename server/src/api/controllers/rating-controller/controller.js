const ratingService = require('../../services/rating-service');

class RatingController {
  getBeerRatingValueOnly = async (req, res, next) => {
    try {
      const ratingData = await ratingService.getBeerRatingValue({ ...req.params });
      res.send(ratingData);
    } catch (error) {
      next(error);
    }
  }

  getBeerRatingFull = async (req, res, next) => {
    try {
      const ratingData = await ratingService.getBeerRatingFull({ userId: req.userId, ...req.params });
      res.send(ratingData);
    } catch (error) {
      next(error);
    }
  }

  changeBeerRating = async (req, res, next) => {
    try {
      const ratingData = await ratingService.changeBeerRating({ userId: req.userId, ...req.params, ...req.query });
      res.send(ratingData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new RatingController();
