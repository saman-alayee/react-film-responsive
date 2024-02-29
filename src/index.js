import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout';
import Router from './Components/Router';
import GlobalStyle from './style/Global';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <GlobalStyle/>
    <Router/>
  </Layout>
  </React.StrictMode>
);


