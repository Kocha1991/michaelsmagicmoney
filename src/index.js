import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <MetaMaskProvider
        debug={true}
        sdkOptions={{
          dappMetadata: {
            name: "Mishale Scott's Paper",
            url: window.location.href,
          },
          infuraAPIKey: process.env.INFURA_API_KEY,
          // Other options.
        }}
      >
        <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
