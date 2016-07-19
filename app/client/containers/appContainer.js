import { connect } from 'react-redux';
import { addDonor } from '../actions/donorActions';
import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    donors: state.donors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDonor: (donor) => dispatch(addDonor(donor)),
  };
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
