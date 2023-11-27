import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './index.css';
import Apicontext from './apis/apicontext';
import {Provider} from "react-redux";
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import store from './store'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_LINKDIN_DOMIN}
    clientId={process.env.REACT_APP_LINKDIN_CLINET_ID}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <Apicontext>
      <HelmetProvider>
    <App />
      </HelmetProvider>
    </Apicontext>
  </Provider>
  </Auth0Provider>
);