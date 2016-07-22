import { actionTypes } from './actionTypes';

export function addDonorAction(donor) {
  return {
    type: actionTypes.addDonor,
    donor,
  };
}
