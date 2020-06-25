const { Router } = require('express');
const controller = require('./controller');

module.exports = Router()
  .get('/', controller.getBeerItems)
  .get('/:id', controller.getBeerItem);
