import axios from 'axios';
import hostHelper from './hostHelper';

export default axios.create({
  baseURL: hostHelper(),
  timeout: 9000
});
