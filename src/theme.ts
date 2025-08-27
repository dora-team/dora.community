import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.updated': {
          fontSize: 12,
          color: grey[500],
          fontWeight: 200,
        },
      },
    },
  },
});

export default theme;
