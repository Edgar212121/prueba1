import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://YOUR_GITHUB_PAGES_URL/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>
);
