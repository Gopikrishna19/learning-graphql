import AppProvider from './provider';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'isomorphic-fetch';

ReactDOM.render(<AppProvider/>, document.querySelector('.content'));
