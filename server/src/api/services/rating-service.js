const reviewRepository = require('../data-access-layer/review-repository');
const HttpError = require('../../error-models/http-error');
const Joi = require('@hapi/joi');

class RatingService {
  constructor () {
    this.repository = reviewRepository;
  }

  getBeerRatingValue = async (params) => {
    const isValid = Joi.object({
      id: Joi.number().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Invalid parameters.', 400);
    };

    let beerRating = await this.repository.getOneByCriteria({ beerId: params.id });

    if (!beerRating) {
      beerRating = await reviewRepository.create({ beerId: params.id });
    }

    return {
      rating: beerRating.rating,
      decremented: false,
      incremented: false
    };
  }

  getBeerRatingFull = async (params) => {
    const isValid = Joi.object({
      id: Joi.number().required(),
      userId: Joi.string()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Invalid parameters.', 400);
    };

    const { userId, id } = params;

    let beerRating = await this.repository.getOneByCriteria({ beerId: id });

    if (!beerRating) {
      beerRating = await reviewRepository.create({ beerId: id });
    }

    const incremented = beerRating.likes.includes(userId);
    const decremented = beerRating.dislikes.includes(userId);

    return {
      rating: beerRating.rating,
      decremented,
      incremented
    };
  }

  changeBeerRating = async (params) => {
    console.log(params);
    const isValid = Joi.object({
      id: Joi.number().required(),
      userId: Joi.string().required(),
      action: Joi.string().valid('inc', 'dec').required()
    }).validate(params);

    if (isValid.error || params.page === 0) {
      throw new HttpError('Invalid parameters.', 400);
    };

    const { userId, id, action } = params;

    const beerRating = await this.repository.getOneByCriteria({ beerId: id });
    const incremented = beerRating.likes.includes(userId);
    const decremented = beerRating.dislikes.includes(userId);
    console.log(`Decremented: ${decremented} Incremented ${incremented}`);
    let options;
    // TOOD: Refactor
    if (action === 'inc') {
      if (incremented) {
        throw new HttpError('The user increased rating earlier.', 400);
      }
      if (decremented) {
        options = {
          $inc: {
            rating: 1
          },
          $pull: {
            dislikes: userId
          }
        };
      } else {
        options = {
          $inc: {
            rating: 1
          },
          $push: {
            likes: userId
          }
        };
      }
    } else {
      if (decremented) {
        throw new HttpError('The user decreased rating earlier.', 400);
      }
      if (incremented) {
        options = {
          $inc: {
            rating: -1
          },
          $pull: {
            likes: userId
          }
        };
      } else {
        options = {
          $inc: {
            rating: -1
          },
          $push: {
            dislikes: userId
          }
        };
      }
    }
    const updatedBeerRating = await this.repository.update({
      beerId: id
    }, options);
    return {
      rating: updatedBeerRating.rating
    };
  }
}

module.exports = new RatingService();
