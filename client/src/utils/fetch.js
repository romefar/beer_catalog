import axios from './api';

const fetch = async (url, method = 'GET', body = null, headers = {}, params = {}) => {
  try {
    let authHeader = {};
    if (localStorage.getItem('AUTH_TOKEN')) {
      const token = JSON.parse(localStorage.getItem('AUTH_TOKEN')).token;
      authHeader = {
        Authorization: `Bearer ${token}`
      };
    }
    const items = await axios({
      url,
      method,
      data: body,
      headers: { ...headers, ...authHeader },
      params
    });
    return items.data;
  } catch (error) {
    console.dir(error);
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};

export default fetch;
