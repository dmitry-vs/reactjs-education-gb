import React from 'react';
import {connect} from "react-redux";

import {getPosts, deletePost, addPost} from "../actions/postsAction";
import Post from '../components/post';
import AddPostModal from '../components/addPostModal';
import EditPostModal from '../components/editPostModal';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts());

    // delete post handler
    document.querySelector('body').addEventListener('click', event => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
        this.props.dispatch(deletePost($post.getAttribute('data-id')));
      }
    });

    // add post handler
    document.getElementById('add-post-form').addEventListener('submit', event => {
      event.preventDefault();
      $('#add-post-modal').modal('toggle'); // force modal close
      let $addPostFormTitle = document.getElementById('add-post-title');
      let $addPostFormAuthorId = document.getElementById('add-post-author-id');
      let $addPostFormContent = document.getElementById('add-post-content');
      let [title, userId, body] = [$addPostFormTitle.value, $addPostFormAuthorId.value, $addPostFormContent.value];
      if(!title || !userId || !body) {
        alert('Form fields must be non-empty');
        return;
      }
      userId = parseInt(userId);
      if(isNaN(userId) || userId <= 0) {
        alert('Author ID must be positive integer');
      }

      this.props.dispatch(addPost(title, userId, body));
      // clear form for future use
      [$addPostFormTitle.value, $addPostFormAuthorId.value, $addPostFormContent.value] = ['', '', ''];
    });
  }

  render() {
    let content = this.props.posts.map((item, index) => {
      return <Post key={index} id={item.id} title={item.title} content={item.body} 
        authorName={'Test'} authorId={item.userId}/>
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