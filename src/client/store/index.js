import {combineReducers, createStore} from 'redux';
import reducers from './reducers';

let store;

export const getStore = () => {

  if (!store) {
    store = createStore(
      combineReducers({
        ...reducers
      })
    );
  }

  return store;

};
