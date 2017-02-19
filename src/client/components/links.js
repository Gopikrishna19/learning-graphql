import React, {PropTypes} from 'react';
import Relay from 'react-relay';

const Links = props =>
  <ul>
    {
      props.store.links.map(
        (link, index) =>
          <li key={index}>
            <a href={link.url}>
              {link.title}
            </a>
          </li>
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
