import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = React.createClass({
  render() {
    return React.createElement('h3', null, 'Hello World!');
  }
});

ReactDOM.render(React.createElement(HelloWorld), document.querySelector('.content'));
