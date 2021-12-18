import { userAPI } from '@/api/user';
import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface CurrentUserResponse {
  id: number;
  nickname: string;
  image?: string;
}

export const useCurrentUser = (): UseQueryResult<CurrentUserResponse, AxiosError> =>
  useQuery('currentUser', userAPI.getCurrentUser);
