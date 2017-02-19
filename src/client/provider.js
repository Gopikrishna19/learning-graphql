import React from 'react';
import Relay from 'react-relay';
import Links from './components/links';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/links')
);

class HomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    store: Component => Relay.QL`
      query Query {
       store { ${Component.getFragment('store')} }
      }
    `
  }
}

const AppProvider = () =>
  <Relay.RootContainer
    Component={Links}
    route={new HomeRoute()}
  />;

AppProvider.displayName = 'AppProvider';

export default AppProvider;
