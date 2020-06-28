const { Router } = require('express');
const controller = require('./controller');

module.exports = Router()
  .get('/beer/:id(\\d+)/review', controller.getBeerReviews);
