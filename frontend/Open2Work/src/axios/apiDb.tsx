import axios from 'axios';

export const apiDb = axios.create({
  baseURL: 'http://192.168.1.43:8080',
});
