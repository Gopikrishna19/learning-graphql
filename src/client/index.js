import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () =>
  <h3>
    Hello World!
  </h3>;

ReactDOM.render(<HelloWorld/>, document.querySelector('.content'));
