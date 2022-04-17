import React from 'react';
import ReactDOM from 'react-dom/client';  // React18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { sagaRun } from './store/index';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

const rootNode = document.getElementById('root'); // React18

// React18
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>
);

sagaRun();