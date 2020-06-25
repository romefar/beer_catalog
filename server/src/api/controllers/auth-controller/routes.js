const { Router } = require('express');
const controller = require('./controller');

module.exports = Router()
  .post('/signup', controller.signUp)
  .post('/signin', controller.signIn);
