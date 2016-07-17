import arcGIS from 'arcgis';
import React from 'react';

export default class Map extends React.Component {

  componentDidMount() {
    const arc = arcGIS();
    arc.request()
    .then(r => { console.log(r); })
    .catch(r => { console.log(r); });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}
