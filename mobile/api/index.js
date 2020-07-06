/*
  API

  both for production and development api
*/

import axios from 'axios';
// import Config from '../../Config';

export default axios.create({
  // local development config
  // baseURL: Config.email.dev,
  // baseURL: Config.email.prod,

  // production url
  baseURL: 'https://u5la3fxun4.execute-api.us-east-1.amazonaws.com/api',

  // data type format
  responseType: 'json',
});
