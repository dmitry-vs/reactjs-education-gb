import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return(
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {this.props.items.map((item, index) => <a className="p-2 text-muted" href={item.href} key={index}>{item.text}</a>)}
        </nav>
      </div>
    )
  }
}