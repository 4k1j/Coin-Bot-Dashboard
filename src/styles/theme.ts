import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
declare module '@mui/system' {
  interface Theme {
    header: {
      height: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    header?: {
      height?: number;
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
});

export default theme;
