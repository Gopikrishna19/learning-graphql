import StoreConfig from '../query-config/store';
import React from 'react';
import Relay from 'react-relay';
import Links from './links';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/links')
);

const Application = () =>
  <Relay.RootContainer
    Component={Links}
    route={new StoreConfig()}
  />;

Application.displayName = 'Application';

export default Application;
