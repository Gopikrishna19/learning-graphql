import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

let store;

export actionCreators from './action-creators';

export const getStore = () => {

  if (!store) {
    store = createStore(
      combineReducers({
        ...reducers
      }),
      applyMiddleware(thunk)
    );
  }

  return store;

};
