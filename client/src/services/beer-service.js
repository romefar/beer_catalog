import fetch from '../utils/fetch';

class BeerService {
  #beerRoute = '/beers?per_page=8';

  fetchBeerItems = async () => {
    return await fetch(this.#beerRoute);
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
