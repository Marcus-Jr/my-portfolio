import { createTheme, responsiveFontSizes } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    main: string;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#013035ff',
    },
    secondary: {
      main: '#03A688',  
    },
    tertiary: {
      main: '#000000ff'
    }
  },
  typography: {
    fontFamily: "Franklin Gothic"
  }
});

theme.palette.tertiary.contrastText = theme.palette.getContrastText(theme.palette.tertiary.main);

theme = responsiveFontSizes(theme);

export default theme;