import React from 'react';

import Header from './header';
import Navbar from './navbar';
import FeaturedPosts from './featuredPosts';
import Post from './post';
import Sidebar from './sidebar';

export default class Blog extends React.Component {
  render() {
    let featuredPostsHead = this.props.posts.filter(post => post.name === this.props.featuredPosts.head)[0];
    let featuredPostLeft = this.props.posts.filter(post => post.name === this.props.featuredPosts.leftBox)[0];
    let featuredPostRight = this.props.posts.filter(post => post.name === this.props.featuredPosts.rightBox)[0];

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
          
          <FeaturedPosts
            head={featuredPostsHead}
            left={featuredPostLeft}
            right={featuredPostRight}
          />
        </div>
      
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">{this.props.postsBlockHeadline}</h3>
            
              {/* render all posts */}
              {this.props.posts.map((item, index) => 
                <Post key={index} name={item.name} date={item.date} author={item.author} content={item.content} />)}

              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href={this.props.blogPagination.older.href}>{this.props.blogPagination.older.text}</a>
                <a className="btn btn-outline-secondary disabled" href={this.props.blogPagination.newer.href}>{this.props.blogPagination.newer.text}</a>
              </nav>
            </div>{/* blog-main */}
            
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