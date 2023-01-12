import { createTheme } from "@mui/material/styles";
 
const theme = createTheme({
  spacing: 12,
  palette: {
    type: 'dark',
    primary: {
      main: '#181828',
    },
    secondary: {
      main: '#4E24F2',
      light: '#24F25E',
      dark: '#4E24F2',
    },
    background: {
      default: '#0C0C14',
      paper: '#181828',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#fafafa',
      disabled: 'rgba(203,203,203,0.38)',
      hint: 'rgba(86,86,86,0.38)',
    },
    error: {
      main: '#ff00fb',
    },
    warning: {
      main: '#FFC120',
    },
    info: {
      main: '#00fff6',
    },
    success: {
      main: '#d2ff00',
    },
    divider: 'rgba(50,183,94,0.12)',
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightBold: 1000,
    h1: {
      fontWeight: 900,
      fontSize: '4.2rem',
    },
    fontWeightMedium: 600,
    htmlFontSize: 35,
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontSize: '2.1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    button: {
      fontSize: 13,
      fontWeight: 800,
      fontFamily: 'Open Sans',
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 11,
    },
  },
  // props: {
  //   MuiButtonBase: {
  //     disableripple: true,
  //   },
  // }
  
});

export default theme;
