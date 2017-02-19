import React, {PropTypes} from 'react';
import Link from './link';
import Relay from 'react-relay';

const Links = props =>
  <ul>
    {
      props.store.links.edges.map(
        (link, index) =>
          <Link
            key={index}
            link={link.node}
          />
      )
    }
  </ul>;

Links.displayName = 'Links';
Links.propTypes = {
  store: PropTypes.object.isRequired
};

const Container = Relay.createContainer(Links, {
  fragments: {
    store: () => Relay.QL`fragment on Links { 
      links(first: 5) {
        edges {
          node {
            ${Link.getFragment('link')}
          }
        }
      }
    }`
  }
});

Container.displayName = 'LinksContainer';

export default Container;
