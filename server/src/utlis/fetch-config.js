const { required } = require("@hapi/joi");

const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.punkapi.com/v2'
});
