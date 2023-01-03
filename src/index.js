import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
