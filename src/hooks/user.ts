import { ICurrentUser } from './../schema/user';
import { USER_KEYS } from '@/consts/query-keys';
import { userAPI } from '@/api/user';
import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

export const useCurrentUser = (): UseQueryResult<ICurrentUser, AxiosError> =>
  useQuery(USER_KEYS.CURRENT_USER, userAPI.getCurrentUser);
