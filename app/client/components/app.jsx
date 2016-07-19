import React from 'react';
import DonorForm from './donorForm';
import PatientDisplay from './patientDisplay';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(v) {
    this.props.onAddDonor(v);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Volunteer</h1>
        </div>
        <div className="well">
          <DonorForm onSubmit={this.handleSubmit} />
        </div>
        <div className="panel panel-primary">
          <div className="panel-heading">Donors</div>
          <div className="panel-body">
            <PatientDisplay volunteers={this.props.donors} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  donors: React.PropTypes.array,
  onAddDonor: React.PropTypes.func,
};
