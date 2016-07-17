import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Map from './imports/common/map';

window.$ = window.jQuery = jQuery;
require('bootstrap');

ReactDOM.render(
  <Map />,
  document.getElementById('example')
);
