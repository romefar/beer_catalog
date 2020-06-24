const axios = require('axios');

module.exports = async (url) => {
  return await axios(url);
};
