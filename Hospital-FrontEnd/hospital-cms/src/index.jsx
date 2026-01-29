import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// We keep Bootstrap because your app needs it for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);