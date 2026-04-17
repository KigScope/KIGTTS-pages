import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import App from './App';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            colorScheme: 'dark',
            '--glow-x': '70vw',
            '--glow-y': '80vh',
          },
          html: {
            minHeight: '100%',
            backgroundColor: '#041011',
          },
          body: {
            minHeight: '100vh',
            backgroundColor: '#041011',
            color: '#f5fbfb',
            overscrollBehavior: 'none',
          },
          '#root': {
            minHeight: '100vh',
          },
          '::selection': {
            backgroundColor: 'rgba(3, 131, 135, 0.35)',
            color: '#f5fbfb',
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
