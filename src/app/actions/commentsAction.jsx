import axios from 'axios';

import {GET_COMMENTS} from "../constants/commentsConstants";

export let getComments = (postId) => {
  let url = '/api';
  if(postId) {
    url += `/posts/${postId}`;
  }
  url += '/comments';
  
  return {
    type: GET_COMMENTS,
    payload: axios.get(url),
  }
}