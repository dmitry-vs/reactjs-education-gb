import React from 'react';

export default class EditPostModal extends React.Component {
  render() {
    return(
      <div className="modal fade" id="edit-post-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit post</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="edit-post-form">
                <div className="form-group">
                  <label htmlFor="edit-post-title">Edit post title</label>
                  <input type="text" id="edit-post-title" className="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="edit-post-content">Edit post content</label>
                  <textarea id="edit-post-content" className="form-control" rows="4" placeholder="Content"/>
                </div>
                <div className="form-group">
                  <input id="edit-post-id" type="hidden"/>
                </div>
                <button type="submit" id="testtest" className="btn btn-primary">Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}