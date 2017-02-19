import React, {Component, PropTypes} from 'react';

class Links extends Component {

  componentWillMount() {
    this.props.setLinks();
  }

  render() {
    return (
      <ul>
        {
          this.props.links.map(
            (link, index) =>
              <li key={index}>
                <a href={link.url}>
                  {link.title}
                </a>
              </li>
          )
        }
      </ul>
    );
  }
}

Links.displayName = 'Links';
Links.propTypes = {
  links: PropTypes.array.isRequired
};

export default Links;
