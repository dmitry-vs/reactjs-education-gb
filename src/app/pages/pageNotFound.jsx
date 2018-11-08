import React from 'react';
import {Link} from 'react-router-dom';

export default class PageNotFound extends React.Component {
    render() {
      return(
        <div>
          <h1>Page not found</h1>
          <p>Nothing found to match your request</p>
          <p>Go to <Link to='/main'>Main page</Link></p>
          <hr/>
        </div>
      )
    }
  }