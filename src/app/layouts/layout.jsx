import React from 'react';

import Header from '../components/header';
import Navbar from '../components/navbar';
import Config from '../components/config';
import Sidebar from '../components/sidebar';

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