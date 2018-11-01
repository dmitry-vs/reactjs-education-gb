import React from 'react';
import Crypto from 'crypto';

import Header from './header';
import Navbar from './navbar';
import Post from './post';
import EditPostModal from './editPostModal';
import Sidebar from './sidebar';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: this.props.posts};
  }
  
  render() {
    return(
      <div id="wraper">
        <div className="container">
          <Header/>
          <Navbar items={this.props.navbarItems}/>
        </div>
      
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <button type="submit" className="btn btn-success" id="button-add-post" data-toggle="modal" data-target="#edit-post-modal">
                Add post
              </button><hr/><br/>

              {[...this.state.posts].reverse().map((item, index) => 
                <Post key={index} id={item.id} title={item.title} date={item.date} author={item.author} content={item.content} />)}
              <EditPostModal/>

              <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">Older</a>
                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
              </nav>
            </div>
            
            <Sidebar 
              header={this.props.sidebarContent.header}
              archives={this.props.sidebarContent.archives}
              elsewhere={this.props.sidebarContent.elsewhere}
            />
          </div>{/* row */}
        </main>
        
        <footer className="blog-footer">
          <p>Footer content</p>
          <p><a href="#">Back to top</a></p>
        </footer>
      </div>//wrapper
    );
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
    // greeting
    alert(
`Welcome to simple React blog!
Post titles collapse/expand on click.
It is possible to create, update and delete posts.`
    );
    
    // delete post
    document.querySelector('body').addEventListener('click', (event) => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode;
        this.delPost($post.getAttribute('data-id'));
      }
    }, true);

    let $editPostFormPostId = document.getElementById('edit-post-id');
    let $editPostFormPostTitle = document.getElementById('edit-post-title');
    let $editPostFormPostAuthor = document.getElementById('edit-post-author');
    let $editPostFormPostContent = document.getElementById('edit-post-content');
    
    // edit post
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
    
    // edit post and add post modal form submit handling
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

      if(id) {
        this.updatePost(id, title, author, content);
      } else {
        let id = Crypto.randomBytes(10).toString('hex');
        let date = new Date();
        this.addPost(id, title, date, author, content);
      }
      
      // clear modal #edit-post-form
      $editPostFormPostId.value = '';
      $editPostFormPostTitle.value = '';
      $editPostFormPostAuthor.value = '';
      $editPostFormPostContent.value = '';
    });

    // also need to clear modal #edit-post-form on add post button click
    document.getElementById('button-add-post').addEventListener('click', event => {
      $editPostFormPostId.value = '';
      $editPostFormPostTitle.value = '';
      $editPostFormPostAuthor.value = '';
      $editPostFormPostContent.value = '';
    });
  }
}