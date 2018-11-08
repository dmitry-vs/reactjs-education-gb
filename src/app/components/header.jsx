import React from 'react';
import {Link} from 'react-router-dom';

import SignUpModal from './signUpModal';

export default class Header extends React.Component {
  render() {
    return(
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1"/>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to='/'>Learn ReactJS</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#signupModal">Sign up</button>
            <SignUpModal/>
          </div>
        </div>
      </header>
    )
  }
}