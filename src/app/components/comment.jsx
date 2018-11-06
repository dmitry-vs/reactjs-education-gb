import React from 'react';

export default class Comment extends React.Component {
  render() {
    return(
      <div>
        <h5>{this.props.name}</h5>by <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
        <p>{this.props.body}</p>
      </div>
    )
  }
}