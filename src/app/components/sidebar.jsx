import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return(
      <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
          <h4 className="font-italic">Home work Lesson 7</h4>
          <p className="mb-0">Subject: Redux</p><hr/>
          <ul>
            <li>State management is built on Redux</li>
            <li>Posts can be added, edited or deleted</li>
            <li>Posts page has links to User and Comments pages</li>
            <li>Comments page has links to Posts page</li>
            <li>All routes work right from browser if using <em>server.js</em> as backend</li>
          </ul>
        </div>
        <div className="p-3">
          <h4 className="font-italic">Additional links</h4>
          <ol className="list-unstyled mb-0">
            <li><a href='#'>Link 1</a></li>
            <li><a href='#'>Link 2</a></li>
            <li><a href='#'>Link 3</a></li>
            <li><a href='#'>Link 4</a></li>
          </ol>
        </div>
      </aside>
    )
  }
}