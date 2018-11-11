import React from 'react';
import {connect} from "react-redux";

import {getPosts, deletePost, addPost} from "../actions/postsAction";
import Post from '../components/post';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts());

    // delete post handler
    document.querySelector('body').addEventListener('click', event => {
      if(event.target.classList.contains('button-delete-post')) {
        let $post = event.target.parentNode.parentNode.parentNode;
        this.props.dispatch(deletePost($post.getAttribute('data-id')));
      }
    }, true);
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
        <hr/>
        {this.props.isLoading ? 'Loading...' : content}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    posts: store.posts.posts,
    isLoading: store.posts.isLoading,
  }
}

export default connect(mapStateToProps)(Posts);