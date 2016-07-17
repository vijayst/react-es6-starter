import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/app';

window.$ = window.jQuery = jQuery;
require('bootstrap');

ReactDOM.render(
  <App />,
  document.getElementById('example')
);
