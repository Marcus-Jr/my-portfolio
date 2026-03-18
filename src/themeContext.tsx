import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const theme = useMemo(() => {
    let t = createTheme({
      palette: {
        primary: {
          main: isDarkMode ? '#000000' : '#FFFFFF',
        },
        secondary: {
          main: '#03A688',
        },
        tertiary: {
          main: isDarkMode ? '#FFFFFF' : '#000000',
        },
      },
      typography: {
        fontFamily: "Franklin Gothic",
      },
    });

    t.palette.tertiary.contrastText = t.palette.getContrastText(t.palette.tertiary.main);
    t = responsiveFontSizes(t);
    return t;
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}