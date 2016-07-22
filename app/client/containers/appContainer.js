import { connect } from 'react-redux';
import { addDonorAction } from '../actions/addDonorAction';
import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    donors: state.donors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDonor: (donor) => dispatch(addDonorAction(donor)),
  };
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
