import React from 'react';

export default class Comment extends React.Component {
  render() {
    return(
      <div>
        <h5>{this.props.name}</h5>by <strong>{this.props.email}</strong>
        <p>{this.props.body}</p>
      </div>
    )
  }
}