import { actionTypes } from './actionTypes';

export function addDonor(donor) {
  return {
    type: actionTypes.addDonor,
    donor,
  };
}
