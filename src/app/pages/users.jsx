import React from 'react';
import {connect} from "react-redux";

import {getUsers} from "../actions/usersAction";
import User from '../components/user';

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers(this.props.match.params.id));
  }

  render() {
    let subHeader = this.props.match.params.id ? `Info about user with ID: ${this.props.match.params.id}` : 'This is Users page';

    let content = <ul>
      {this.props.users.map((user, index) => 
        <li key={index}>
          <User name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website}/>
          <br/>
        </li>
      )}
    </ul>;

    return (
      <div>
        <h1>Users</h1>
        <p>{subHeader}</p>
        <hr/>
        {this.props.isLoading ? 'Loading...' : content}
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    users: store.users.users,
    isLoading: store.users.isLoading,
  }
}

export default connect(mapStateToProps)(Users);