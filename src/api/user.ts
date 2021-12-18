import { request } from '@/utils/axios';

const USER_PATH = {
  CURRENT: 'mock-user.json', // TODO: 'users/me'
};

export const userAPI = {
  getCurrentUser: () => request.get(USER_PATH.CURRENT).then(({ data }) => data),
};
