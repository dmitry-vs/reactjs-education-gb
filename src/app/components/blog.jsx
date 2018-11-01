import React from 'react';

import Header from './header';
import Navbar from './navbar';
import AddPost from './addpost';
import Post from './post';
import Sidebar from './sidebar';

// todo:
// delete post
// edit post
// greeting modal
// move add post form to modal
// add all posts on page load (pre-load)

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts};
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
                <Post key={index} title={item.title} date={item.date} author={item.author} content={item.content} />)}

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

  randomIndex(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addPost(id, title, date, author, content) {
    this.state.posts.push({id, title, date, author, content});
    this.setState({posts: this.state.posts});
  }

  delPost(id) {
    let index = this.state.posts.findIndex(item => item.id === id);
    if(index === -1) {
      alert(`Failed to delete: no post found with id ${id}`);
      return;
    }
    this.state.posts.splice(index, 1);
    this.setState({posts: this.state.posts});
  }

  componentDidMount() {
    let $addPostForm = document.getElementById('add-post-form');
    $addPostForm.addEventListener('submit', event => {
      let $title = document.getElementById('add-post-title');
      let $author = document.getElementById('add-post-author');
      let $content = document.getElementById('add-post-content');
      
      let [title, author, content] = [$title.value, $author.value, $content.value];
      if(!title || !author || !content) {
        alert('Form fields must be non-empty');
        return;
      }

      let id = this.randomIndex(10000, 20000);
      let date = new Date();
      this.addPost(id, title, date, author, content);
      [$title.value, $author.value, $content.value] = ['', '', ''];
    });
  }
}