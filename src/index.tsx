import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';

import * as serviceWorker from 'serviceWorker';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/e-commerce-app'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
