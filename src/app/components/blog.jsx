import React from 'react';

import Header from './header';
import Navbar from './navbar';
import AddPostForm from './addpostform';
import Post from './post';
import EditPostModal from './editpostmodal';
import Sidebar from './sidebar';

// todo:
// edit post
// greeting modal with readme
// move add post form to modal
// * add all posts on page load (pre-load)
// * replace randomIndex with generateId hash function

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
              <AddPostForm/>

              {this.state.posts.map((item, index) => 
                <Post key={index} id={item.id} title={item.title} date={item.date} author={item.author} content={item.content} />)}
              
              <EditPostModal/>

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

  updatePost(id, newTitle, newAuthor, newContent) {
    let index = this.state.posts.findIndex(item => item.id === id);
    if(index === -1) {
      alert(`Failed to edit: no post found with id ${id}`);
      return;
    }
    this.state.posts[index].title = newTitle;
    this.state.posts[index].author = newAuthor;
    this.state.posts[index].content = newContent;
    this.setState({posts: this.state.posts});
  }

  componentDidMount() {
    // add post
    let $addPostForm = document.getElementById('add-post-form');
    $addPostForm.addEventListener('submit', event => {
      event.preventDefault();
      let $title = document.getElementById('add-post-title');
      let $author = document.getElementById('add-post-author');
      let $content = document.getElementById('add-post-content');
      
      let [title, author, content] = [$title.value, $author.value, $content.value];
      if(!title || !author || !content) {
        alert('Form fields must be non-empty');
        return;
      }

      let id = this.randomIndex(10000, 20000).toString();
      let date = new Date();
      this.addPost(id, title, date, author, content);
      [$title.value, $author.value, $content.value] = ['', '', ''];
    });

    // delete post
    document.querySelector('body').addEventListener('click', (event) => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode;
        this.delPost($post.getAttribute('data-id'));
      }
    }, true);

    // edit post
    let $editPostFormPostId = document.getElementById('edit-post-id');
    let $editPostFormPostTitle = document.getElementById('edit-post-title');
    let $editPostFormPostAuthor = document.getElementById('edit-post-author');
    let $editPostFormPostContent = document.getElementById('edit-post-content');
    document.querySelector('body').addEventListener('click', (event) => {
      if(event.target.classList.contains('button-edit-post')) {
        let $post = event.target.parentNode.parentNode;
        let postId = $post.getAttribute('data-id');
        let index = this.state.posts.findIndex(item => item.id === postId);
        
        // fill input fields in modal #edit-post-form
        $editPostFormPostId.value = postId;
        $editPostFormPostTitle.value = this.state.posts[index].title;
        $editPostFormPostAuthor.value = this.state.posts[index].author;
        $editPostFormPostContent.value = this.state.posts[index].content;
      }
    }, true);
    
    let $editPostForm = document.getElementById('edit-post-form');
    $editPostForm.addEventListener('submit', event => {
      event.preventDefault();
      $('#edit-post-modal').modal('toggle'); // modal does not close on submit, we need to close it manually
      let $id = document.getElementById('edit-post-id');
      let $title = document.getElementById('edit-post-title');
      let $author = document.getElementById('edit-post-author');
      let $content = document.getElementById('edit-post-content');
      let [id, title, author, content] = [$id.value, $title.value, $author.value, $content.value];
      if(!title || !author || !content) {
        alert('Form fields must be non-empty');
        return;
      }

      this.updatePost(id, title, author, content);

      // clear modal #edit-post-form
      $editPostFormPostId.value = '';
      $editPostFormPostTitle.value = '';
      $editPostFormPostAuthor.value = '';
      $editPostFormPostContent.value = '';
    });
  }
}