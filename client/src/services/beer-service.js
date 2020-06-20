import fetch from '../utils/fetch';
import ResizeController from '../utils/resize-controller';
import isEqual from 'lodash.isequal';

class BeerService {
  #beerRoute = '/beers';
  #prevOptions = null;
  #params = {
    per_page: 12,
    page: 1,
    beer_name: null,
    abv_gt: null,
    ibu_gt: null,
    ebc_gt: null
  }

  #defaultImageUrl = 'http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg';

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

  #replaceEmptyImages = (items) => {
    const fixeditems = items.data.map(item => {
      if (!item.image_url) {
        item.image_url = this.#defaultImageUrl;
      }
      return item;
    });
    return {
      ...items,
      data: fixeditems
    };
  }

  fetchBeerItems = async (options) => {
    this.#configureRequest(options);
    const url = this.#generateUrl();
    const rawItems = await fetch(`${this.#beerRoute}${url}`);
    const items = this.#replaceEmptyImages(rawItems);
    this.#params.page += 1;
    return items;
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
