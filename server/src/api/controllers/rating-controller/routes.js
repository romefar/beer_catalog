const { Router } = require('express');
const controller = require('./controller');
const auth = require('../../../middlewares/auth');

module.exports = Router()
  .get('/beer/:id(\\d+)', controller.getBeerRating)
  .patch('/beer/:id(\\d+)', auth, controller.changeBeerRating);
