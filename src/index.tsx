import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootStoreProvider } from './context/RootStoreContext';
ReactDOM.render(
  <Router>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </Router>,
  document.getElementById('root')
);
