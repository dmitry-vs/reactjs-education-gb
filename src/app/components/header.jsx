import React from 'react';

import Modal from './modal';

export default class Header extends React.Component {
  render() {
    return(
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href={this.props.headerSubscribeLink.href}>{this.props.headerSubscribeLink.text}</a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">{this.props.headerCenterText}</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href={this.props.headerSearchLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3">
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#signupModal">
              {this.props.headerSignupButton.text}
            </button>
            <Modal/>
          </div>
        </div>
      </header>
    )
  }
}