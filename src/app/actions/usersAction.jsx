import axios from 'axios';

import {GET_USERS} from "../constants/usersConstans";

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios.get('https://jsonplaceholder.typicode.com/users'),
  }
}