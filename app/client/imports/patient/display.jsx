import React from 'react';
import Map from '../common/map';

export default class Display extends React.Component {
  render() {
    return (
      <div>
        <Map />
        {this.props.volunteers.length > 0 ? (
          this.props.volunteers.map((v) => (
            <div key={v.name} className="bg-info text-info volunteer">
            {v.name}
            </div>
          ))
        ) : null}
      </div>
    );
  }
}

Display.propTypes = {
  volunteers: React.PropTypes.array.isRequired,
};
