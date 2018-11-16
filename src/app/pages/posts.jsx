import React from 'react';
import {connect} from "react-redux";

import {getPosts, deletePost, addPost, editPost} from "../actions/postsAction";
import {getUsers} from "../actions/usersAction";
import Post from '../components/post';
import AddPostModal from '../components/addPostModal';
import EditPostModal from '../components/editPostModal';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts(this.props.match.params.id));
    this.props.dispatch(getUsers());

    // delete post and edit post button click handlers
    document.querySelector('body').addEventListener('click', event => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
        this.props.dispatch(deletePost($post.getAttribute('data-id')));
      } 
      else if(event.target.classList.contains('button-edit-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
        let $editPostFormPostId = document.getElementById('edit-post-id');
        let $editPostFormTitle = document.getElementById('edit-post-title');
        let $editPostFormContent = document.getElementById('edit-post-content');
        $editPostFormPostId.value = $post.getAttribute('data-id');
        $editPostFormTitle.value = $post.querySelector('.blog-post-title').innerText;
        $editPostFormContent.value = $post.querySelector('.blog-post-content').innerText;
      }
    });

    // add post form handler
    document.getElementById('add-post-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#add-post-modal').modal('toggle'); // force modal close
      let $addPostFormTitle = document.getElementById('add-post-title');
      let $addPostFormAuthorId = document.getElementById('add-post-author-id');
      let $addPostFormContent = document.getElementById('add-post-content');
      let [title, userId, body] = [$addPostFormTitle.value, $addPostFormAuthorId.value, $addPostFormContent.value];
      [$addPostFormTitle.value, $addPostFormAuthorId.value, $addPostFormContent.value] = ['', '', '']; // clear form for future use
      
      if(!title || !userId || !body) {
        alert('Form fields must be non-empty');
        return;
      }
      this.props.dispatch(addPost(title, userId, body));
    });

    // edit post form handler
    document.getElementById('edit-post-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#edit-post-modal').modal('toggle'); // force modal close
      let $editPostFormPostId = document.getElementById('edit-post-id');
      let $editPostFormTitle = document.getElementById('edit-post-title');
      let $editPostFormContent = document.getElementById('edit-post-content');
      let [postId, title, body] = [$editPostFormPostId.value, $editPostFormTitle.value, $editPostFormContent.value];
      [$editPostFormPostId.value, $editPostFormTitle, $editPostFormContent] = ['', '', '']; // clear form for future use
      
      if(!postId || !title || !body) {
        alert('Form fields must be non-empty');
        return;
      }
      this.props.dispatch(editPost(postId, title, body));
    });
  }

  render() {
    let subHeader = this.props.match.params.id ? `Info about post with ID: ${this.props.match.params.id}` : 'This is Posts page';
    
    let content = this.props.posts.map((item, index) => {
      let postAuthor = this.props.users.filter(user => user._id === item.userId)[0];
      return <Post key={index} id={item._id} title={item.title} content={item.body} authorId={item.userId} authorName={{...postAuthor}.username}/>
    });
    
    return(
      <div>
        <h1>Posts</h1>
        <p>{subHeader}</p>
        <button type="submit" className="btn btn-primary" id="button-add-post" data-toggle="modal" data-target="#add-post-modal">
          Add post
        </button><br/>
        <hr/>
        {this.props.isLoading ? 'Loading...' : content}
        <AddPostModal/>
        <EditPostModal/>
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    posts: store.posts.posts,
    users: store.users.users,
    isLoading: store.posts.isLoading,
  }
}

export default connect(mapStateToProps)(Posts);