import React, {PropTypes} from 'react';

const Link = props =>
  <li>
    <a href={props.url}>
      {props.title}
    </a>
  </li>;

Link.displayName = 'Link';
Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
