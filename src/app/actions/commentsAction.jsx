import axios from 'axios';

import {GET_COMMENTS} from "../constants/commentsConstants";

export function getComments() {
  return {
    type: GET_COMMENTS,
    payload: axios.get('https://jsonplaceholder.typicode.com/comments'),
  }
}