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
      state = {...state, isLoading: false, posts: action.payload.data};
      break;
    }
    case PostsConstants.GET_POSTS_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
    // delete post
    case PostsConstants.DELETE_POST: {
      let index = state.posts.findIndex(post => parseInt(post.id) === parseInt(action.payload));

      if(index !== -1) {
        state = merge({}, state);
        state.posts.splice(index, 1);
      }
      break;
    }
    // add post
    case PostsConstants.ADD_POST: {
      state = merge({}, state);
      let newPost = {
        userId: action.payload.userId,
        id: state.posts.length + 1,
        title: action.payload.title,
        body: action.payload.body,
      };
      state.posts.push(newPost);
      break;
    }
    // edit post
    case PostsConstants.EDIT_POST: {
      let index = state.posts.findIndex(post => parseInt(post.id) === parseInt(action.payload.postId));

      if(index !== -1) {
        state = merge({}, state);
        state.posts[index].title = action.payload.newTitle;
        state.posts[index].body = action.payload.newBody;
      }
    }
  }
  return state;
}