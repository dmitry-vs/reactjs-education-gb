import React from 'react';
import {Link} from 'react-router';



export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <h1>Layout</h1>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/comments'>Comments</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}