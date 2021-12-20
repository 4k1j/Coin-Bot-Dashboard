import { request } from '@/utils/axios';

const BOT_PATH = {
  SUMMARY: 'mock-bot-summary.json', // TODO: 'bots/{userId}'
};

// preparing / running / trading / paused / error / terminating
export const botAPI = {
  getCoinBotList: () => request.get(BOT_PATH.SUMMARY).then(({ data }) => data),
};
