import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { JogadorProvider } from './context/JogadorProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JogadorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JogadorProvider>
  </React.StrictMode>,
);
