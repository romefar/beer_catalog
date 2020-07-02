const beerRepository = require('../data-access-layer/beer-repository');
const profileRepository = require('../data-access-layer/profile-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');

class BeerService {
  constructor () {
    this.repository = beerRepository;
  }

  getBeerFavouritesItems = async (params) => {
    const defaultItemsPerPage = 10;

    const isValid = Joi.object({
      page: Joi.number().required(),
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error || params.page === 0) {
      throw new HttpError('Invalid URL parameters.', 400);
    };

    const userId = params.userId;
    const user = await profileRepository.getById(userId);
    if (!user) {
      throw new HttpError('User wasn\'t found.', 404);
    }

    const beerFavouritesItemsIds = user.favourites.map(item => item.beerId);
    const beerFavouritesItemsAddDate = {};
    for (let i = 0; i < user.favourites.length; i++) {
      if (user.favourites[i]) {
        beerFavouritesItemsAddDate[user.favourites[i].beerId] = user.favourites[i].addDate;
      }
    }
    const start = defaultItemsPerPage * (params.page - 1);
    const end = defaultItemsPerPage * params.page;
    const urlIds = beerFavouritesItemsIds.slice(start, end).join('|');

    const beerFavouritesItems = await this.repository.getManyByIds({ ids: urlIds });
    const beerFavouritesItemsWithDate = beerFavouritesItems.map(item => {
      item.addedToFavouriteDate = beerFavouritesItemsAddDate[item.id];
      return item;
    });
    const pages = Math.round(user.favourites.length / defaultItemsPerPage);
    return { items: [...beerFavouritesItemsWithDate], pages };
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
      id: Joi.number().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Cannot find route.', 404);
    }

    return await this.repository.getOneById(params.id);
  }

  #parseBeerIngredients = (ingredients) => {
    let maltArr = [];
    let hopsArr = [];
    if (ingredients.malt.length > 0) {
      maltArr = ingredients.malt.map(item => item.name.toLowerCase().split(' ').join('_'));
    }
    if (ingredients.hops.length > 0) {
      hopsArr = ingredients.hops.map(item => item.name.toLowerCase().split(' ').join('_'));
    }
    return [maltArr, hopsArr];
  }

  getBeerSuggestions = async (params) => {
    const userId = '5ef76c80f92b1725dc4e8320';
    const user = await profileRepository.getById(userId);
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    const favourites = user.favourites;
    if (favourites.length > 0) {
      const ids = favourites.map(item => item.beerId);
      const items = await this.repository.getManyByIds({ ids: ids.join('|') });
    }
  }
}

module.exports = new BeerService();
