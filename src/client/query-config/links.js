import Relay from 'react-relay';

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

export default HomeRoute;
