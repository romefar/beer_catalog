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

  getBeerFavouritesItems = async (req, res, next) => {
    try {
      const beerItems = await beerService.getBeerFavouritesItems({
        userId: req.userId,
        ...req.query
      });
      res.send(beerItems);
    } catch (error) {
      next(error);
    }
  }

  getSuggestionsByYeast = async (req, res, next) => {
    try {
      const beerItem = await beerService.getBeerSuggestionsByYeast({ ...req.query, userId: req.userId });
      res.send(beerItem);
    } catch (error) {
      next(error);
    }
  }

  getSuggestions = async (req, res, next) => {
    try {
      const beerItem = await beerService.getBeerSuggestions({ ...req.query, userId: req.userId });
      res.send(beerItem);
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
