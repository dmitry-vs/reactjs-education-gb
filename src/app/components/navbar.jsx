import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return(
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {this.props.items.map((item, index) => 
            <Link className={this.isActive(item.href) ? "p-2" : "p-2 text-muted"} 
            to={item.href} key={index}>{item.text}</Link>)}
        </nav>
      </div>
    )
  }
}