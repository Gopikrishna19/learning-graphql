import React, {PropTypes} from 'react';
import {CreateLinkMutation} from '../mutations/create-link';
import Link from './link';
import Relay from 'react-relay';

const handleChange = (event, props) => {
  const limit = Number(event.target.value);

  props.relay.setVariables({limit});
};

const handleSubmit = (event, props) => {
  event.preventDefault();

  const form = event.target;
  const title = form[0].value;
  const url = form[1].value;

  Relay.Store.commitUpdate(
    new CreateLinkMutation({
      title,
      url,
      store: props.store
    }),
    {
      onFailure: (...args) => console.log('Failure:', ...args),
      onSuccess: (...args) => console.log('Success:', ...args)
    }
  );

  form[0].value = '';
  form[1].value = '';

  return false;
};

const Links = props =>
  <div>
    <h1>Links</h1>
    <label>
      Showing &nbsp;
      <input
        min={1}
        max={100}
        onChange={event => handleChange(event, props)}
        type='number'
        value={props.relay.variables.limit}
      /> &nbsp;
      links.
    </label>
    <form onSubmit={event => handleSubmit(event, props)}>
      <input autoComplete='off' type='text' placeholder='Title' required='required'/>
      <input autoComplete='off' type='url' placeholder='Url' required='required'/>
      <input type='submit' value='Add'/>
    </form>
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
    limit: 100
  },
  fragments: {
    store: () => Relay.QL`fragment on Links {
      id,
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
