import React from 'react';

export default class Modal extends React.Component {
  render() {
    return(
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="exampleModalLabel">New message</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="control-label">Recipient:</label>
                  <input type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="control-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}