import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { muiTheme } from './theme/muiTheme';
import { Dashboard } from './pages/Dashboard/Dashboard';
import './style.scss';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
