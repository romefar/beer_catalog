const beerRepository = require('../data-access-layer/beer-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');

class BeerService {
  constructor () {
    this.repository = beerRepository;
  }

  getBeerItems = async (params) => {
    if (Object.entries(params).length > 0) {
      const isValid = Joi.object({
        page: Joi.number(),
        per_page: Joi.number(),
        beer_name: Joi.string(),
        abv_gt: Joi.number(),
        ibu_gt: Joi.number(),
        ebc_gt: Joi.number()
      }).validate(params);

      if (isValid.error) {
        throw new HttpError('Invalid URL parameters.', 400);
      }
    }
    return await this.repository.getAll(params);
  }

  getBeerItem = async (params) => {
    const isValid = Joi.object({
      id: Joi.number()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Cannot find route.', 404);
    }

    return await this.repository.getById(params.id);
  }
}

module.exports = new BeerService();
