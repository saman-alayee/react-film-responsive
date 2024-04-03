import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Components/Router';
import GlobalStyle from './style/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router/>
  </React.StrictMode>
);


