import { lightGreen, lime, blue, pink, purple, red } from '@mui/material/colors';

// preparing / running / trading / paused / error / terminating
export const BOT_STATUS = {
  preparing: { title: 'preparing', color: lime[500] },
  running: { title: 'running', color: blue[800] },
  trading: { title: 'trading', color: lightGreen[500] },
  paused: { title: 'paused', color: purple[800] },
  error: { title: 'error', color: red[900] },
  terminating: { title: 'terminating', color: pink[900] },
};
