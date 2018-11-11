import axios from "axios";

import {GET_POSTS, DELETE_POST, ADD_POST, EDIT_POST} from "../constants/postsConstants";

export let getPosts = () => {
  return {
    type: GET_POSTS,
    payload: axios.get('https://jsonplaceholder.typicode.com/posts'),
  }
}

export let deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  }
}

export let addPost = (title, userId, body) => {
  return {
    type: ADD_POST,
    payload: {title, userId, body},
  }
}

export let editPost = (postId, newTitle, newBody) => {
  return {
    type: EDIT_POST,
    payload: {postId, newTitle, newBody},
  }
}