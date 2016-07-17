import React from 'react';
import arcGIS from 'arcgis';

function print(...args) {
  console.log(...args);
}

export default class Map extends React.Component {

  componentDidMount() {
    const arc = arcGIS();
    arc.request()
    .then(print)
    .catch(print);

    arc.map('3b93337983e9436f8db950e38a8629af')
    .then(print)
    .catch(print);
  }

  render() {
    return (
      <div />
    );
  }
}
