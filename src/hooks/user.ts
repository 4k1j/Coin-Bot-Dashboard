import { USER_KEYS } from '@/consts/query-keys';
import { userAPI } from '@/api/user';
import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface CurrentUserResponse {
  id: number;
  nickname: string;
  image?: string;
}

export const useCurrentUser = (): UseQueryResult<CurrentUserResponse, AxiosError> =>
  useQuery(USER_KEYS.CURRENT_USER, userAPI.getCurrentUser);
