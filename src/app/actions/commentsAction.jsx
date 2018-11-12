import axios from 'axios';

import {GET_COMMENTS} from "../constants/commentsConstants";

export let getComments = (postId) => {
  let url = 'https://jsonplaceholder.typicode.com';
  if(postId) {
    url += `/posts/${postId}`;
  }
  url += '/comments';
  
  return {
    type: GET_COMMENTS,
    payload: axios.get(url),
  }
}