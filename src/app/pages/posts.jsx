import React from 'react';
import {connect} from "react-redux";

import {getPosts, deletePost, addPost, editPost} from "../actions/postsAction";
import Post from '../components/post';
import AddPostModal from '../components/addPostModal';
import EditPostModal from '../components/editPostModal';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts());

    // get these elements here to avoid repeating code later
    let $editPostFormPostId = document.getElementById('edit-post-id');
    let $editPostFormTitle = document.getElementById('edit-post-title');
    let $editPostFormContent = document.getElementById('edit-post-content');

    // delete post and edit post button click handlers
    document.querySelector('body').addEventListener('click', event => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
        this.props.dispatch(deletePost($post.getAttribute('data-id')));
      } else if(event.target.classList.contains('button-edit-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
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
      userId = parseInt(userId);
      if(isNaN(userId) || userId <= 0) {
        alert('Author ID must be positive integer');
      }
      this.props.dispatch(addPost(title, userId, body));
    });

    // edit post form handler
    document.getElementById('edit-post-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#edit-post-modal').modal('toggle'); // force modal close
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
    let content = this.props.posts.map((item, index) => {
      return <Post key={index} id={item.id} title={item.title} content={item.body} authorId={item.userId}/>
    });
    
    return(
      <div>
        <h1>Posts</h1>
        <p>This is Posts page</p>
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
    isLoading: store.posts.isLoading,
  }
}

export default connect(mapStateToProps)(Posts);