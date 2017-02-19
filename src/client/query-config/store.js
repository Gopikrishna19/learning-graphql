import Relay from 'react-relay';

class StoreConfig extends Relay.Route {
  static routeName = 'Store';
  static queries = {
    store: Component => Relay.QL`
      query Query {
       store { ${Component.getFragment('store')} }
      }
    `
  }
}

export default StoreConfig;
