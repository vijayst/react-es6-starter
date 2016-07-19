import { actionTypes } from '../actions/actionTypes';

export default function donorReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.addDonor:
      return [...state, Object.assign({}, action.donor)];
    default:
      return state;
  }
}
