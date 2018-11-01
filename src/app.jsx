import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BlogConfig from './app/components/config';
import Blog from './app/components/blog';

ReactDOM.render(<Blog 
  navbarItems={BlogConfig.navbarItems}
  posts={BlogConfig.posts}
  sidebarContent={BlogConfig.sidebarContent}
  />, 
  document.getElementById('app')
);