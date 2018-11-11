import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {postsReducer} from './reducers/postsReducer';
// import {commentsReducer} from './reducers/commentsReducer';
// import {usersReducer} from './reducers/usersReducer';

const middleware = applyMiddleware(promise(), logger, thunk);

const reducers = combineReducers({
  posts: postsReducer,
  // comments: commentsReducer,
  // users: usersReducer,
});

const store = createStore(reducers, middleware);
export default store;