import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.42.207:3333'
});

export default api;

// export const imgurUploader = axios.create({
//   baseURL: 'https://api.imgur.com/3/'
// })