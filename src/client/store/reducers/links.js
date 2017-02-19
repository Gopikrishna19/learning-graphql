import actions from '../actions';

export default (state = [], action) => {

  const reducers = {
    [actions.SET_LINKS]: () => action.links
  };
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;

};

