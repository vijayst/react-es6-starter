import React from 'react';
import VolunteerForm from './volunteer/form';
import PatientDisplay from './patient/display';
import Map from './common/map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      volunteers: [],
    };
  }

  handleSubmit(v) {
    const volunteers = this.state.volunteers.slice();
    volunteers.push(v);
    this.setState({ volunteers });
  }

  render() {
    return (
      <div>
        <div className="well">
          <VolunteerForm onSubmit={this.handleSubmit} />
        </div>
        <div className="panel panel-primary">
          <div className="panel-heading">Volunteers</div>
          <div className="panel-body">
            <PatientDisplay volunteers={this.state.volunteers} />
          </div>
        </div>
        <Map />
      </div>
    );
  }
}
