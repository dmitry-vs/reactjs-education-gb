import axios from "axios";

import {GET_POSTS, DELETE_POST, ADD_POST, EDIT_POST} from "../constants/postsConstants";

export let getPosts = (id) => {
  let url = '/api/posts';
  if(id) {
    url += `/${id}`;
  }
  
  return {
    type: GET_POSTS,
    payload: axios.get(url),
  }
}

export let deletePost = (postId) => {
  let url = `/api/posts/delete/${postId}`;

  return {
    type: DELETE_POST,
    payload: axios.get(url),
  }
}

export let addPost = (title, userId, body) => {
  let url = '/api/posts/insert';
  
  return {
    type: ADD_POST,
    payload: axios.post(url, {userId, title, body}),
  }
}

export let editPost = (postId, newTitle, newBody) => {
  let url = '/api/posts/update';
  
  return {
    type: EDIT_POST,
    payload: axios.post(url, {postId, newTitle, newBody}),
  }
}