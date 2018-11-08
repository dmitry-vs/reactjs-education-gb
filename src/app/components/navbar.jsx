import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.navbarItems = [
      {text: 'Main', href: '/'},
      {text: 'Posts', href: '/posts'},
      {text: 'Comments', href: '/comments'},
      {text: 'Users', href: '/users'},
    ];
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return(
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {this.navbarItems.map((item, index) => 
            <Link className={this.isActive(item.href) ? "p-2" : "p-2 text-muted"} 
            to={item.href} key={index}>{item.text}</Link>
          )}
        </nav>
      </div>
    )
  }
}