import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

window.$ = window.jQuery = jQuery;
const bootstrap = require('bootstrap');

ReactDOM.render(
  <h1>Hello, world 2</h1>,
  document.getElementById('example')
);
