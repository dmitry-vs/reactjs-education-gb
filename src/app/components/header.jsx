import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return(
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1"/>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to='/'>Learn ReactJS</Link>
          </div>
          <div className="col-4"/>
        </div>
      </header>
    )
  }
}