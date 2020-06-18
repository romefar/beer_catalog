import fetch from '../utils/fetch';
import ResizeController from '../utils/resize-controller';

class BeerService {
  #beerRoute = '/beers';
  #params = {
    per_page: 1,
    page: 27
  }

  #defaultImageUrl = 'http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg';

  #configureRequest = () => {
    const itemsCount = ResizeController.getItemsCount();
    this.#params.per_page = itemsCount;
  }

  #generateUrl = () => {
    const url = [];
    for (const [key, value] of Object.entries(this.#params)) {
      if (value) {
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

  fetchBeerItems = async () => {
    this.#configureRequest();
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
