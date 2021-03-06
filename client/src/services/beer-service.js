import fetch from '../utils/fetch';
import ResizeController from '../utils/resize-controller';
import isEqual from 'lodash.isequal';

class BeerService {
  #beerRoute = '/api/v1/beers';
  #prevOptions = null;
  #params = {
    per_page: 12,
    page: 1,
    beer_name: null,
    abv_gt: null,
    ibu_gt: null,
    ebc_gt: null
  }
  // TODO: move image replacer to server!

  #defaultImageUrl = 'http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg';

  resetPages = () => {
    this.#params.page = 1;
  }

  getFavouritesBeerItems = async (page) => {
    return await fetch(`${this.#beerRoute}/favourites?page=${page}`);
  }

  #configureRequest = (options) => {
    const {
      searchQuery,
      alcoholVolume,
      bitternetsUnits,
      ebcColor
    } = options;
    this.#params.per_page = ResizeController.getItemsCount();
    const isChanged = isEqual(this.#prevOptions, options);
    this.#params.page = isChanged ? this.#params.page : 1;
    this.#params = {
      ...this.#params,
      beer_name: searchQuery,
      abv_gt: alcoholVolume,
      ibu_gt: bitternetsUnits,
      ebc_gt: ebcColor
    };
    this.#prevOptions = options;
  }

  #generateUrl = () => {
    const url = [];
    for (let [key, value] of Object.entries(this.#params)) {
      if (value) {
        if (key === 'beer_name') {
          key = key.split(' ').join('_');
        }
        url.push(`${key}=${value}`);
      }
    }
    return `?${url.join('&')}`;
  }

  #replaceEmptyImages = (beerData) => {
    const fixeditems = beerData.map(item => {
      if (!item.image_url) {
        item.image_url = this.#defaultImageUrl;
      }
      return item;
    });
    return {
      data: fixeditems
    };
  }

  fetchBeerSuggestions = async (page) => {
    return await fetch(`${this.#beerRoute}/suggestions?page=${page}`);
  }

  fetchBeerSuggestionsByYeast = async (page, yeast) => {
    const yeastURI = yeast.toLowerCase().split(' ').join('_');
    return await fetch(`${this.#beerRoute}/suggestions?page=${page}&yeast=${yeastURI}`);
  }

  fetchBeerItems = async (options) => {
    this.#configureRequest(options);
    const url = this.#generateUrl();
    const beerData = await fetch(`${this.#beerRoute}${url}`);
    const beerItems = this.#replaceEmptyImages(beerData);
    this.#params.page += 1;
    return beerItems;
  }

  fetchSingleBeer = async (options) => {
    const { id } = options;
    const beerData = await fetch(`${this.#beerRoute}/${id}`);
    const beerItem = this.#replaceEmptyImages(beerData);
    return beerItem.data.shift();
  }
}

const getBeerService = (() => {
  let instance = null;
  return () => {
    if (instance) {
      return instance;
    } else {
      instance = new BeerService();
      return instance;
    }
  };
})();

export default getBeerService;
