import React, {PropTypes} from 'react';
import Relay from 'react-relay';

const Link = ({link}) =>
  <li>
    <a href={link.url}>
      {link.title}
    </a>
  </li>;

Link.displayName = 'Link';
Link.propTypes = {
  link: PropTypes.object.isRequired
};

const LinkContainer = Relay.createContainer(Link, {
  fragments: {
    link: () => Relay.QL`fragment on Link {
      id,
      title,
      url
    }`
  }
});

LinkContainer.displayName = 'LinkContainer';

export default LinkContainer;
