import axios from 'axios';

import {GET_USERS} from "../constants/usersConstans";

export let getUsers = () => {
  return {
    type: GET_USERS,
    payload: axios.get('https://jsonplaceholder.typicode.com/users'),
  }
}