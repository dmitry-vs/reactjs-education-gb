import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {postsReducer} from './reducers/postsReducer';
import {usersReducer} from './reducers/usersReducer';
import {commentsReducer} from './reducers/commentsReducer';

const middleware = applyMiddleware(promise(), logger, thunk);

const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
});

const store = createStore(reducers, middleware);
export default store;