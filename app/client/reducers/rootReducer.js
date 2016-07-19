import { combineReducers } from 'redux';
import donorReducer from './donorReducer';

const rootReducer = combineReducers({
  donors: donorReducer,
});

export default rootReducer;
