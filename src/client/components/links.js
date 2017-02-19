import React, {PropTypes} from 'react';

const Links = props =>
  <ul>
    {
      props.links.map(
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
  links: PropTypes.array.isRequired
};

export default Links;
