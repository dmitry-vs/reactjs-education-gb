import * as UsersConstants from '../constants/usersConstans';

export let usersReducer = (state = {users: [], isLoading: false}, action) => {
  switch(action.type) {
    case UsersConstants.GET_USERS_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case UsersConstants.GET_USERS_FULFILLED: {
      state = {...state, isLoading: false, users: action.payload.data instanceof Array ? action.payload.data : [action.payload.data]};
      break;
    }
    case UsersConstants.GET_USERS_REJECTED: {
      state = {...state, isLoading: false, errorMessage: action.payload.message};
      break;
    }
  }
  return state;
}