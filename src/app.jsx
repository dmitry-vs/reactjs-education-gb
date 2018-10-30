import './app/styles/blog.css';
import React from 'react';
import ReactDOM from 'react-dom';
import BlogConfig from './app/components/config';
import Blog from './app/components/blog';

ReactDOM.render(<Blog 
  headerSubscribeLink={BlogConfig.headerSubscribeLink}
  headerCenterText={BlogConfig.headerCenterText}
  headerSearchLink={BlogConfig.headerSearchLink}
  headerSignupButton={BlogConfig.headerSignupButton}
  navbarItems={BlogConfig.navbarItems}
  featuredPosts={BlogConfig.featuredPosts}
  modal={BlogConfig.modal}
  postsBlockHeadline={BlogConfig.postsBlockHeadline} 
  posts={BlogConfig.posts}
  blogPagination={BlogConfig.blogPagination}
  sidebarContent={BlogConfig.sidebarContent}
  footerContent={BlogConfig.footerContent}
  />, 
  document.getElementById('app')
  );