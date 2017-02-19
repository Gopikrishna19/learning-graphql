import React, {PropTypes} from 'react';
import Link from './link';
import Relay from 'react-relay';

const handleChange = (event, props) => {
  const limit = Number(event.target.value);

  props.relay.setVariables({limit});
};

const Links = props =>
  <div>
    <h1>Links</h1>
    <label>
      Showing &nbsp;
      <input
        min={1}
        max={12}
        onChange={event => handleChange(event, props)}
        type="number"
        value={props.relay.variables.limit}
      /> &nbsp;
      links.
    </label>
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
    </ul>
  </div>;

Links.displayName = 'Links';
Links.propTypes = {
  store: PropTypes.object.isRequired
};

const Container = Relay.createContainer(Links, {
  initialVariables: {
    limit: 12
  },
  fragments: {
    store: () => Relay.QL`fragment on Links { 
      links(first: $limit) {
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
