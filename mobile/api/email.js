import axios from 'axios';
import Config from '../../Config';

export default axios.create({
  // baseURL: Config.email.prod,
  baseURL: 'https://u5la3fxun4.execute-api.us-east-1.amazonaws.com/api',
  responseType: 'json'
});
