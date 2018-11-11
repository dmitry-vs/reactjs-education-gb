import axios from "axios";

import {GET_POSTS, DELETE_POST, ADD_POST, EDIT_POST} from "../constants/postsConstants";

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: axios.get('https://jsonplaceholder.typicode.com/posts'),
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  }
}

export function addPost(title, userId, body) {
  return {
    type: ADD_POST,
    payload: {title, userId, body},
  }
}