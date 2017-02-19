import Application from './application';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'isomorphic-fetch';

ReactDOM.render(<Application/>, document.querySelector('.content'));
