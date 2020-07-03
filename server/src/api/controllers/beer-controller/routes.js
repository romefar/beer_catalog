const { Router } = require('express');
const controller = require('./controller');
const auth = require('../../../middlewares/auth');

module.exports = Router()
  .get('/', controller.getBeerItems)
  .get('/:id(\\d+)', controller.getBeerItem)
  .get('/favourites', auth, controller.getBeerFavouritesItems)
  .get('/suggestions', auth, controller.getSuggestions);
