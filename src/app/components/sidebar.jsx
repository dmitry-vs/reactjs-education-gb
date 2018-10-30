import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return(
      <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
          <h4 className="font-italic">{this.props.header.title}</h4>
          <p className="mb-0">{this.props.header.text}</p>
        </div>
        <div className="p-3">
          <h4 className="font-italic">{this.props.archives.name}</h4>
          <ol className="list-unstyled mb-0">
            {this.props.archives.items.map((item, index) => <li key={index}><a href={item.href}>{item.text}</a></li>)}
          </ol>
        </div>
        <div className="p-3">
          <h4 className="font-italic">{this.props.elsewhere.name}</h4>
          <ol className="list-unstyled">
            {this.props.elsewhere.items.map((item, index) => <li key={index}><a href={item.href}>{item.text}</a></li>)}
          </ol>
        </div>
      </aside>
    )
  }
}