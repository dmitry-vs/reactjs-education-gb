import React from 'react';

export default class SignUpModal extends React.Component {
  render() {
    return(
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">{this.props.title}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <form>
                <input type="text" className="form-control" placeholder={this.props.emailPlaceholder}/>
                <br/>
                <input type="text" className="form-control" placeholder={this.props.passwordPlaceholder}/>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">{this.props.buttonCloseText}</button>
              <button type="button" className="btn btn-primary">{this.props.buttonSubmitText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}