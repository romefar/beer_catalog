import axios from './api';

const fetch = async (url, method = 'GET', body = null, headers = {}, params = {}) => {
  try {
    const items = await axios({
      url,
      method,
      data: body,
      headers,
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
