import React from 'react';

export default class DonorForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.value });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    e.preventDefault();
  }

  render() {
    return (
      <form className="form form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Donor Name: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

DonorForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};
