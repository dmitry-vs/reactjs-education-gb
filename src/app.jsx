import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from './app/layouts/layout';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);