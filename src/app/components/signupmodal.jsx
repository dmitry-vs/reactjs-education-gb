import React from 'react';

export default class SignUpModal extends React.Component {
  render() {
    return(
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">Sign up</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <form>
                <input type="text" className="form-control" placeholder="Email"/>
                <br/>
                <input type="text" className="form-control" placeholder="Password"/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}