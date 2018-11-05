import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/layout';
import Main from './app/pages/main';
import Comments from './app/pages/comments';
import Blog from './app/pages/blog';
import Users from './app/pages/users';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}/>
      <Route path="blog" component={Blog}/>
      <Route path="comments" component={Comments}/>      
      <Route path="users" component={Users}/>
    </Route>
  </Router>,
  document.getElementById('app')
);