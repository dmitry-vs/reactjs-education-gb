import axios from 'axios';

import {GET_COMMENTS} from "../constants/commentsConstants";

export let getComments = (postId) => {
  let url = '/api/comments';
  if(postId) {
    url += `/${postId}`;
  }
  
  return {
    type: GET_COMMENTS,
    payload: axios.get(url),
  }
}