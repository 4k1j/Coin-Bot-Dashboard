import { createTheme } from '@mui/material/styles';
import { lightGreen, lime, blue, pink, purple, red } from '@mui/material/colors';
declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: number;
    };
    sidebar: {
      width: number;
    };
    status: {
      preparing: string;
      running: string;
      trading: string;
      paused: string;
      error: string;
      terminating: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    header?: {
      height?: number;
    };
    sidebar?: {
      width?: number;
    };
    status?: {
      preparing: string;
      running: string;
      trading: string;
      paused: string;
      error: string;
      terminating: string;
    };
  }
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    error: {
      main: red.A400,
    },
  },
  header: {
    height: 52.5,
  },
  sidebar: {
    width: 240,
  },
  status: {
    preparing: lime[500],
    running: blue[800],
    trading: lightGreen[500],
    paused: purple[800],
    error: red[900],
    terminating: pink[900],
  },
});

export default theme;
