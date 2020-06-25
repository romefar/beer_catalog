const axios = require('./fetch-config');

module.exports = async (url, method = 'GET', body = {}, params = {}, headers = {}, options = {}) => {
  const items = await axios({
    url,
    method,
    data: body,
    params,
    headers
  });
  return items.data;
};
