import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Layout from './app/layouts/layout';

ReactDOM.render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.getElementById('app')
);