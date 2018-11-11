import merge from 'lodash/merge';

import * as PostsConstants from '../constants/postsConstants';

export function postsReducer(state = {posts: [], isLoading: false}, action) {
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
      break;
    }
    // add post
    case PostsConstants.ADD_POST: {
      break;
    }
    // edit post
  }
  return state;
}