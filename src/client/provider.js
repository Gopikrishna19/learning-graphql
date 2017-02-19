import {Provider, connect} from 'react-redux';
import {getStore} from './store';
import Links from './components/links';
import React from 'react';
import actionCreators from './store/action-creators';

const Container = connect(
  state => state,
  actionCreators
)(Links);

const AppProvider = () =>
  <Provider store={getStore()}>
    <Container/>
  </Provider>;

Container.displayName = 'Container';
AppProvider.displayName = 'AppProvider';

export default AppProvider;
