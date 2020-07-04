const { Router } = require('express');
const controller = require('./controller');
const auth = require('../../../middlewares/auth');

module.exports = Router()
  .get('/beer/:id(\\d+)/value', controller.getBeerRatingValueOnly)
  .get('/beer/:id(\\d+)', auth, controller.getBeerRatingFull)
  .patch('/beer/:id(\\d+)', auth, controller.changeBeerRating);
