const beerService = require('../../services/beer-service');

class BeerController {
  getBeerItems = async (req, res, next) => {
    try {
      const beerItems = await beerService.getBeerItems(req.query);
      res.send(beerItems);
    } catch (error) {
      next(error);
    }
  }

  getBeerItem = async (req, res, next) => {
    try {
      const beerItem = await beerService.getBeerItem(req.params);
      res.send(beerItem);
    } catch (error) {
      next(error);
    };
  }
}

module.exports = new BeerController();
