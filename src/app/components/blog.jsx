import React from 'react';

import Header from './header';
import Navbar from './navbar';
import AddPost from './addpost';
import Post from './post';
import Sidebar from './sidebar';

// todo:
// add new post
// delete post
// edit post
// hide/show post by click on its title
// greeting modal

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
    };
  }
  
  render() {
    return(
      <div id="wraper">
        <div className="container">
          <Header 
            subscribeLink={this.props.header.subscribeLink} 
            centerText={this.props.header.centerText}
            searchLink={this.props.header.searchLink}
            signupButton={this.props.header.signupButton}
            modal={this.props.modal}
          />
          <Navbar items={this.props.navbarItems}/>
        </div>
      
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <AddPost/>

              {this.state.posts.map((item, index) => 
                <Post key={index} name={item.name} date={item.date} author={item.author} content={item.content} />)}

              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href={this.props.blogPagination.older.href}>{this.props.blogPagination.older.text}</a>
                <a className="btn btn-outline-secondary disabled" href={this.props.blogPagination.newer.href}>{this.props.blogPagination.newer.text}</a>
              </nav>
            </div>
            
            <Sidebar 
              header={this.props.sidebarContent.header}
              archives={this.props.sidebarContent.archives}
              elsewhere={this.props.sidebarContent.elsewhere}
            />
          </div>{/* row */}
        </main>
        
        <footer className="blog-footer">{this.props.footerContent}</footer>
      </div>//wrapper
    );
  }
}