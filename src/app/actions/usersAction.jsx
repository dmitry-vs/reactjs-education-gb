import axios from 'axios';

import {GET_USERS} from "../constants/usersConstans";

export let getUsers = (id) => {
  let url = '/api/users';
  if(id) {
    url += `/${id}`;
  }

  return {
    type: GET_USERS,
    payload: axios.get(url),
  }
}