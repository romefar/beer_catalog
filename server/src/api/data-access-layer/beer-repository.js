const fetch = require('../../utlis/fetch');

class BeerRepository {
  #rootUrl = 'https://api.punkapi.com/v2';

  getAll = async (urlQuery = '?page=1&per_page=3') => {
    return await fetch(`${this.#rootUrl}/beers${urlQuery}`);
  }
}

module.exports = new BeerRepository();
