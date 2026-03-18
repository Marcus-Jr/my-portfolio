import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppThemeProvider } from './themeContext';
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <CssBaseline/>
      <App />
    </AppThemeProvider>
  </StrictMode>,
)
