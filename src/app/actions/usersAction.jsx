import {GET_USERS} from "../constants/usersConstans";
import axios from 'axios';

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios.get('https://jsonplaceholder.typicode.com/users'),
  }
}