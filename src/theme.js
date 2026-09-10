import { createTheme } from '@mui/material/styles';

const darkNavy = '#111a38';
const panelNavy = '#202b4d';
const lighterNavy = '#2b3655';
const primaryPurple = '#7c3aed';
const secondaryCyan = '#06b6d4';
const textMain = '#ffffff';
const textMuted = '#94a3b8';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: darkNavy,
      paper: panelNavy,
    },
    primary: {
      main: primaryPurple,
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryCyan,
      contrastText: '#fff',
    },
    text: {
      primary: textMain,
      secondary: textMuted,
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: darkNavy, color: textMain },
        '*': { scrollbarWidth: 'thin', scrollbarColor: `${lighterNavy} ${darkNavy}` },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none', backgroundColor: panelNavy, borderRadius: 12 } },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 10, textTransform: 'none', fontWeight: 600 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: darkNavy,
          '& fieldset': { borderColor: lighterNavy },
          '&:hover fieldset': { borderColor: primaryPurple },
        },
      },
    },
  },
});

export default theme;
