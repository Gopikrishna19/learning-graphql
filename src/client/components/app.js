import LinksQueryConfig from '../query-config/links';
import React from 'react';
import Relay from 'react-relay';
import Links from './links';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/links')
);

const Application = () =>
  <Relay.RootContainer
    Component={Links}
    route={new LinksQueryConfig()}
  />;

Application.displayName = 'Application';

export default Application;
