import React from 'react';
import ReactDOM from 'react-dom';
import BlogConfig from './app/components/config';
import Blog from './app/components/blog.jsx';

ReactDOM.render(<Blog 
  headerSubscribeLink={BlogConfig.headerSubscribeLink}
  headerCenterText={BlogConfig.headerCenterText}
  headerSignupButton={BlogConfig.headerSignupButton}
  navbarItems={BlogConfig.navbarItems}
  featuredPosts={BlogConfig.featuredPosts}
  postsBlockHeadline={BlogConfig.postsBlockHeadline} 
  posts={BlogConfig.posts}
  blogPagination={BlogConfig.blogPagination}
  sidebarHeader={BlogConfig.sidebarHeader}
  />, 
  document.getElementById('app')
  );