import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../pages/main';
import Comments from '../pages/comments';
import Posts from '../pages/posts';
import Users from '../pages/users';
import PageNotFound from '../pages/pageNotFound';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default class Layout extends React.Component {
  render() {
    return(
      <div id="wraper">
        <div className="container">
          <Header/>
          <Navbar/>
        </div>
      
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/posts/:id" component={Posts}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/comments/:postId" component={Comments}/>
                <Route exact path="/comments" component={Comments}/>
                <Route exact path="/users/:id" component={Users}/>
                <Route exact path="/users" component={Users}/>
                <Route path="*" component={PageNotFound}/>
              </Switch>
            </div>
            <Sidebar/>
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