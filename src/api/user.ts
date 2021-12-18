import { request } from '@/utils/axios';

const USER_PATH = {
  CURRENT: 'mock-user.json', // TODO: 'users/me'
};

export const userAPI = {
  getCurrentUser: async () => {
    const res = await request.get(USER_PATH.CURRENT);

    return res;
  },
};
