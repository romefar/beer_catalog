const beerRepository = require('../data-access-layer/beer-repository');
const profileRepository = require('../data-access-layer/profile-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');
const getMostFrequentItem = require('../../utlis/getMostFrequent');

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
    // TODO: CHANGE from ROUNG to CEIL
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

  getBeerSuggestions = async (params) => {
    const defaultItemsPerPage = 10;

    const isValid = Joi.object({
      page: Joi.number().required(),
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error || params.page === 0) {
      throw new HttpError('Invalid URL parameters.', 400);
    };

    const user = await profileRepository.getById(params.userId);
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    const favourites = user.favourites;
    if (favourites.length > 0) {
      const [hopName, maltName] = this.#getFavouritesSuggestions(favourites);

      let pages = null;
      if (params.page === '1') {
        // get first 60 suggestions
        const beerItemsPages = await this.repository.getAll({
          hops: hopName,
          malt: maltName,
          per_page: 60
        });
        pages = Math.ceil(beerItemsPages.length / defaultItemsPerPage);
      }

      const beerItems = await this.repository.getAll({
        page: params.page,
        per_page: defaultItemsPerPage,
        hops: hopName,
        malt: maltName
      });

      const beerItemsImageFixed = beerItems.map(item => {
        item.image_url = item.image_url || 'http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg';
        return item;
      });

      const responseBeerItems = params.page === '1' ? {
        items: [...beerItemsImageFixed],
        isSuggestAvailable: true,
        pages
      } : {
        items: [...beerItemsImageFixed],
        isSuggestAvailable: true
      };

      return responseBeerItems;
    }
    return {
      isSuggestAvailable: false,
      items: []
    };
  }

  #getFavouritesSuggestions = (favourites) => {
    const hopsItems = favourites.map(item => item.hops.split(','));
    const hopsArray = hopsItems.flat();

    const maltItems = favourites.map(item => item.malt.split(','));
    const maltArray = maltItems.flat();

    // most popular hops & malt bases on user's favourites
    const hopName = getMostFrequentItem(hopsArray);
    const maltName = getMostFrequentItem(maltArray);
    return [hopName, maltName];
  }
}

module.exports = new BeerService();
