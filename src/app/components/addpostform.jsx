import React from 'react';

export default class AddPostForm extends React.Component {
  render() {
    return(
      <div>
        <h3 className="pb-3 mb-4 font-italic border-bottom">Add post</h3>
        <form id="add-post-form">
          <div className="form-group">
            <label htmlFor="add-post-title">New post title</label>
            <input type="text" id="add-post-title" className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="add-post-author">New post author</label>
            <input type="text" id="add-post-author" className="form-control" placeholder="Author"/>
          </div>
          <div className="form-group">
            <label htmlFor="add-post-content">New post content</label>
            <textarea id="add-post-content" className="form-control" rows="4" placeholder="Content"/>
          </div>
          <button type="submit" className="btn btn-primary">Add post</button>
        </form>
        <hr/><br/>
      </div>
    )
  }
}