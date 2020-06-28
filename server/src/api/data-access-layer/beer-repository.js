const fetch = require('../../utlis/fetch');

class BeerRepository {
  getAll = async (params) => {
    return await fetch('/beers', 'GET', null, params);
  }

  getManyByIds = async (params) => {
    return await fetch('/beers', 'GET', null, params);
  }

  getOneById = async (id) => {
    return await fetch(`/beers/${id}`);
  }
}

module.exports = new BeerRepository();
