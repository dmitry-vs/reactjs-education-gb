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
  postsBlockHeadline={BlogConfig.postsBlockHeadline} 
  posts={BlogConfig.posts}
  blogPagination={BlogConfig.blogPagination}
  sidebarContent={BlogConfig.sidebarContent}
  // sidebarHeader={BlogConfig.sidebarHeader}
  // sidebarArchives={BlogConfig.sidebarArchives}
  // sidebarElsewhere={BlogConfig.sidebarElsewhere}
  footerContents={BlogConfig.footerContent}
  />, 
  document.getElementById('app')
  );