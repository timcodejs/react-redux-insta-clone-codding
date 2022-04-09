import React from 'react';
import ReactDOM from 'react-dom/client';  // React18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { sagaRun } from './store/index';

const rootNode = document.getElementById('root'); // React18

// React18
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

sagaRun();