import axios from 'axios';

import {GET_USERS} from "../constants/usersConstans";

export let getUsers = (id) => {
  let url = 'https://jsonplaceholder.typicode.com/users';
  if(id) {
    url = `${url}/${id}`;
  }

  return {
    type: GET_USERS,
    payload: axios.get(url),
  }
}