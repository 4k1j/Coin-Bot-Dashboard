import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: number;
    };
    sidebar: {
      width: number;
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
});

export default theme;
