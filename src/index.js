import React from 'react';
import ReactDOM from 'react-dom/client';  // React18
import './index.css';
import App from './App';

const rootNode = document.getElementById('root'); // React18

// React18
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
