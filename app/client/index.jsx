import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

window.$ = window.jQuery = jQuery;
require('bootstrap');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
