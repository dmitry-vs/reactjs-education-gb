import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Layout from './app/layouts/layout';

// add support for:
// - get comments for 1 post with https://jsonplaceholder.typicode.com/posts/1/comments
// - check that routing works correctly for various routes

ReactDOM.render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.getElementById('app')
);