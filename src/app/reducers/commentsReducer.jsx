import * as CommentsConstants from '../constants/commentsConstants';

export function commentsReducer(state = {comments: [], isLoading: false}, action) {
  switch(action.type) {
    case CommentsConstants.GET_COMMENTS_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case CommentsConstants.GET_COMMENTS_FULFILLED: {
      state = {...state, isLoading: false, comments: action.payload.data};
      break;
    }
    case CommentsConstants.GET_COMMENTS_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
  }
  return state;
}