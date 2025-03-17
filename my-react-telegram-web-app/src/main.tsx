import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <TonConnectUIProvider manifestUrl="https://https://edgar212121.github.io/prueba1//tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  );
} else {
  console.error('Root element not found');
}
