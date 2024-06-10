import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-dkmksib5zxlqajtx.us.auth0.com'
      clientId='grUuJpRgdNLuf0k22sj474Gt1Ekhkf3n'
      authorizationParams={{
        redirect_uri: 'http://localhost:3000'
      }}
      audience='http://localhost:8000'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
