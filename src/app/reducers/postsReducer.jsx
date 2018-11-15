import merge from 'lodash/merge';

import * as PostsConstants from '../constants/postsConstants';

export let postsReducer = (state = {posts: [], isLoading: false}, action) => {
  switch(action.type) {
    // get posts
    case PostsConstants.GET_POSTS_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case PostsConstants.GET_POSTS_FULFILLED: {
      state = {...state, isLoading: false, posts: action.payload.data instanceof Array ? action.payload.data : [action.payload.data]};
      break;
    }
    case PostsConstants.GET_POSTS_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
    // delete post
    case PostsConstants.DELETE_POST_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case PostsConstants.DELETE_POST_FULFILLED: {
      let deletedPost = action.payload.data;
      let index = state.posts.findIndex(post => post._id === deletedPost._id);
      if(index !== -1) {
        state = {...state, isLoading: false};
        state.posts.splice(index, 1);
      }
      break;
    }
    case PostsConstants.DELETE_POST_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
    // add post
    case PostsConstants.ADD_POST_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case PostsConstants.ADD_POST_FULFILLED: {
      let newPost = action.payload.data;
      state = {...state, isLoading: false};
      state.posts.push(newPost);
      break;
    }
    case PostsConstants.ADD_POST_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
    // edit post
    case PostsConstants.EDIT_POST: {
      let index = state.posts.findIndex(post => post.id === action.payload.postId);

      if(index !== -1) {
        state = merge({}, state);
        state.posts[index].title = action.payload.newTitle;
        state.posts[index].body = action.payload.newBody;
      }
    }
  }
  return state;
}