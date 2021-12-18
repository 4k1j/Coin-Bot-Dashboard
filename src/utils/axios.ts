import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:3000';

const createInstance = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: 10_000,
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

export const request = {
  get: (url: string, options = {}) => {
    return createInstance().get(url, options);
  },
  post: (url: string, data: object, options = {}) => {
    return createInstance().post(url, data, options);
  },
};
