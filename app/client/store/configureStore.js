import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
