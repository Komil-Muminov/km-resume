import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Polyfill for process.env for the purpose of this browser-based demo
// In a real build environment, this is handled by the bundler (Vite/Webpack)
if (typeof process === 'undefined') {
  (window as any).process = { env: {} };
}
// IMPORTANT: We inject the key provided by the user here for the demo to work immediately.
// In production, never hardcode keys in client-side code.
process.env.API_KEY = "AIzaSyBLCK_Mpgh-Kf9WdavIf72mFnfmr1yZnn8";

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);