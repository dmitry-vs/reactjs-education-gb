import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import User from '../components/user';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }

    this.url = 'https://jsonplaceholder.typicode.com/users';
    if(this.props.location.query.username) {
      this.url += `?username=${this.props.location.query.username}`;
    }
  }
  
  componentWillMount() {
    axios.get(this.url)
    .then(response => this.setState({users: response.data}));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <p>This is Users page</p>
        <hr/>
        <ul>
          {this.state.users.map((user, index) => 
            <li key={index}>
              <User name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website}/>
              <Link to={`/posts?userId=${user.id}`}>See posts</Link><br/>
              <Link to={`/comments?email=${user.email}`}>See comments</Link>
              <br/><br/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}