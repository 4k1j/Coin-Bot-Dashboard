import { lightGreen, lime, blue, pink, purple, red } from '@mui/material/colors';

// preparing / running / trading / paused / error / terminating
export const BOT_STATUS = {
  PREPARING: { TITLE: 'preparing', COLOR: lime[500] },
  RUNNING: { TITLE: 'running', COLOR: blue[800] },
  TRADING: { TITLE: 'trading', COLOR: lightGreen[500] },
  PAUSED: { TITLE: 'paused', COLOR: purple[800] },
  ERROR: { TITLE: 'error', COLOR: red[900] },
  TERMINATING: { TITLE: 'terminating', COLOR: pink[900] },
};
