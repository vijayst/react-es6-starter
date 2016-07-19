import { combineReducers } from 'redux';
import donors from './donorReducer';

const rootReducer = combineReducers({
  donors,
});

export default rootReducer;
