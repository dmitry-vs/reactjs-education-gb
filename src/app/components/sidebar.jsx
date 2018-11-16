import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return(
      <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
          <h4 className="font-italic">Home work Lesson 8</h4>
          <p className="mb-0">Subject: Node, Express, Mongo</p><hr/>
          <ul>
            <li>App uses Node/Express backend</li>
            <li>App uses models Posts, Users and Comments with Mongo</li>
            <li>Posts can be added, deleted or updated</li>
            <li>When post is deleted, its comments are also deleted</li>
            <li>To restore database form dump, run command <code>mongorestore dump</code> from <code>mongodb</code> folder</li>
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