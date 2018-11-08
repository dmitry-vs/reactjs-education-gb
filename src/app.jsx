import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Layout from './app/layouts/layout';
// import Main from './app/pages/main';
// import Comments from './app/pages/comments';
// import Posts from './app/pages/posts';
// import Users from './app/pages/users';

// remove routing based on GET parameters
// instead add support for:
// - get 1 user with https://jsonplaceholder.typicode.com/users/1
// - get 1 post with https://jsonplaceholder.typicode.com/posts/1
// - get comments for 1 post with https://jsonplaceholder.typicode.com/posts/1/comments
// add page 404

ReactDOM.render(
  // <Router history={browserHistory}>
  //   <Route path="/" component={Layout}>
  //     <IndexRoute component={Main}/>
  //     <Route path="posts" component={Posts}/>
  //     <Route path="comments" component={Comments}/>      
  //     <Route path="users" component={Users}/>
  //   </Route>
  // </Router>,
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  document.getElementById('app')
);