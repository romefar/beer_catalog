const ratingService = require('../../services/rating-service');

class RatingController {
  getBeerRating = async (req, res, next) => {
    try {
      const ratingData = await ratingService.getBeerRating({ userId: req.userId, ...req.params });
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
