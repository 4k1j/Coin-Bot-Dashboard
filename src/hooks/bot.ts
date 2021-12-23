import { BOT_KEYS } from '@/consts/query-keys';
import { botAPI } from '@/api/bot';
import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

export interface IBotSummary {
  id: number;
  name: string;
  algorithm: string;
  earningRate: number;
  market: string;
  startTime: string;
  status: string;
}

interface IMyBotListResponse {
  myBotList: IBotSummary[];
}

// TODO: userId를 기반으로 해당하는 user의 coin bot 정보를 요청해야 함.
export const useMyBotList = (/* userId: number */): UseQueryResult<
  IMyBotListResponse,
  AxiosError
> => useQuery(BOT_KEYS.MY_BOT_LIST, botAPI.getMyBotList, { initialData: { botList: [] } });
