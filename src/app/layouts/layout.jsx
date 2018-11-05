import React from 'react';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Config from '../components/config';
import Sidebar from '../components/sidebar';

// import BlogConfig from './app/components/config';
// import Blog from './app/components/blog';

// ReactDOM.render(<Blog 
//   navbarItems={BlogConfig.navbarItems}
//   posts={BlogConfig.posts}
//   sidebarContent={BlogConfig.sidebarContent}
//   />, 
//   document.getElementById('app')
// );

// use correct layout for blog project template

export default class Layout extends React.Component {
  render() {
    return(
      <div id="wraper">
        <div className="container">
          <Header/>
          <Navbar items={Config.navbarItems}/>
        </div>
      
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              {this.props.children}
            </div>
            <Sidebar 
              header={Config.sidebarContent.header}
              archives={Config.sidebarContent.archives}
              elsewhere={Config.sidebarContent.elsewhere}
            />
          </div>{/* row */}
        </main>
        
        <footer className="blog-footer">
          <p>Footer content</p>
          <p><a href="#">Back to top</a></p>
        </footer>
      </div>//wrapper
    )
  }
}