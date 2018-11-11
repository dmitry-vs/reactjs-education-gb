import React from 'react';

export default class AddPostModal extends React.Component {
  render() {
    return(
      <div className="modal fade" id="add-post-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add post</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="add-post-form">
                <div className="form-group">
                  <label htmlFor="add-post-title">New post title</label>
                  <input type="text" id="add-post-title" className="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="add-post-author-id">New post author ID</label>
                  <input type="text" id="add-post-author-id" className="form-control" placeholder="Author ID"/>
                </div>
                <div className="form-group">
                  <label htmlFor="add-post-content">New post content</label>
                  <textarea id="add-post-content" className="form-control" rows="4" placeholder="Content"/>
                </div>
                <button type="submit" className="btn btn-primary">Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}