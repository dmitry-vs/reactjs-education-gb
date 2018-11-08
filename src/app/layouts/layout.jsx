import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../pages/main';
import Comments from '../pages/comments';
import Posts from '../pages/posts';
import Users from '../pages/users';
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
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/main" component={Main}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/comments" component={Comments}/>
                <Route path="/users" component={Users}/>
              </Switch>
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