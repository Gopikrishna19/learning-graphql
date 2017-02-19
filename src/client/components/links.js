import React, {PropTypes} from 'react';
import Link from './link';
import Relay from 'react-relay';

const Links = props =>
  <ul>
    {
      props.store.links.map(
        (link, index) =>
          <Link
            key={index}
            {...link}
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
      links { 
        title, 
        url 
      }
    }`
  }
});

Container.displayName = 'LinksContainer';

export default Container;
