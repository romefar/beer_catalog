import axios from './api';

const fetch = async (url, method = 'GET', body = null, headers = {}, params = {}) => {
  return await axios({
    url,
    method,
    data: body,
    headers,
    params
  });
};

export default fetch;
