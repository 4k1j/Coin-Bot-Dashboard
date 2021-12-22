import { BOT_KEYS } from '@/consts/query-keys';
import { botAPI } from '@/api/bot';
import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface MyBotListResponse {
  id: number;
  botName: string;
  algorithm: string;
  earningRate: number;
  market: string;
  startTime: string;
  status: string;
}

export const useMyBotList = (): UseQueryResult<MyBotListResponse, AxiosError> =>
  useQuery(BOT_KEYS.MY_BOT_LIST, botAPI.getMyBotList);
