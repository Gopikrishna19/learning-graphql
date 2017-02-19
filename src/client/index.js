import Application from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'isomorphic-fetch';

ReactDOM.render(<Application/>, document.querySelector('.content'));
