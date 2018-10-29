import React from 'react';
import ReactDOM from 'react-dom';
import BlogConfig from './app/components/config';
import Blog from './app/components/blog.jsx';

ReactDOM.render(<Blog 
  featuredPosts={BlogConfig.featuredPosts} 
  posts={BlogConfig.posts}
  navbarItems={BlogConfig.navbarItems}/>, 
  document.getElementById('app')
  );