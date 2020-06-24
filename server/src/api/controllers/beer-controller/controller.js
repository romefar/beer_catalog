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
}

module.exports = new BeerController();
