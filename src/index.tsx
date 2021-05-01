import 'index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from 'app/store';

import * as serviceWorker from 'serviceWorker';
import App from 'App';

/* */

import inventory from 'data/inventory.json';
import { addCollection } from 'utils/firebase';

addCollection(
  'inventory',
  inventory.map(({
    title, items
  }: {
    title: string;
    items: {}[];
  }) => ({ title, items }))
);

/* */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/e-commerce-app'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();