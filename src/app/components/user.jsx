import React from 'react';

export default class User extends React.Component {
  render() {
    return(
      <div>
        <h5>{this.props.name}</h5>
        <p>username: {this.props.username}</p>
        <p>email: {this.props.email}</p>
        <p>phone: {this.props.phone}</p>
        <p>website: {this.props.website}</p>
      </div>       
    )
  }
}