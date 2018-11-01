import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BlogConfig from './app/components/config';
import Blog from './app/components/blog';

ReactDOM.render(<Blog 
  header={BlogConfig.header}
  navbarItems={BlogConfig.navbarItems}
  modal={BlogConfig.modal}
  postsBlockHeadline={BlogConfig.postsBlockHeadline} 
  posts={BlogConfig.posts}
  blogPagination={BlogConfig.blogPagination}
  sidebarContent={BlogConfig.sidebarContent}
  footerContent={BlogConfig.footerContent}
  />, 
  document.getElementById('app')
);