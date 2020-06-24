const beerRepository = require('../data-access-layer/beer-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');

class BeerService {
  getBeerItems = async (params) => {
    let url;
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
        throw new HttpError('Invalid URL parameters.', 422);
      }
      console.log(params);

      url = '?';
      for (const [key, value] of Object.entries(params)) {
        url += `${key}=${value}`;
      }
    }
    const items = await beerRepository.getAll(url);
    return items.data;
  }
}

module.exports = new BeerService();
