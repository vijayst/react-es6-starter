import { actionTypes } from '../actions/actionTypes';

export default function donorReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.addDonor:
      return [...state, action.donor];
    default:
      return state;
  }
}
