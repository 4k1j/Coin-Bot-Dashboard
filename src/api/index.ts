import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:3000';

// TODO: 임시 axios 팩토리 메서드
export const createInstance = (() => {
  let instance = null;

  return () => {
    if (!instance) {
      instance = axios.create({
        baseURL: BASE_URL,
        timeout: 10_000,
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    }

    return instance;
  };
})();
