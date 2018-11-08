import React from 'react';
import axios from 'axios';

import User from '../components/user';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.url = 'https://jsonplaceholder.typicode.com/users';
    this.subHeader = 'This is Users page';
    
    if(this.props.match.params.id){
      this.url += `/${this.props.match.params.id}`;
      this.subHeader = <span>Info about user with ID: {this.props.match.params.id}</span>;
    }
  }
  
  componentWillMount() {
    axios.get(this.url)
    .then(response => {
      this.setState({
        users: response.data instanceof Array ? response.data : [response.data],
      });
    });
  }

  render() {
    let content = <ul>
      {this.state.users.map((user, index) => 
        <li key={index}>
          <User name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website}/>
          <br/>
        </li>
      )}
    </ul>;
    
    return (
      <div>
        <h1>Users</h1>
        <p>{this.subHeader}</p>
        <hr/>
        {!this.state.users.length ? 'Loading...' : content}
      </div>
    )
  }
}