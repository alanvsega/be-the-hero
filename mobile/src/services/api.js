import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.27.83.7:3333'
});

export default api;