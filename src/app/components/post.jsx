import React from 'react';
import Moment from 'react-moment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showContent: true};
    this.onShowContent = this.onShowContent.bind(this);
  }
  
  onShowContent() {
    this.setState({showContent: !this.state.showContent});
  }

  render() {
    let postContent;
    if(this.state.showContent) {
      postContent = <div>
        {this.props.content}<br/><br/>
      </div>
    }
    
    return(
      <div className="blog-post" data-id={this.props.id}>
        <h2 className="blog-post-title" onClick={this.onShowContent} style={{cursor: 'pointer'}}>{this.props.title}</h2>
        <p className="blog-post-meta">
          <Moment format="MMMM D, YYYY">{this.props.date}</Moment> by <a href="#">{this.props.author}</a>
        </p>
        
        {postContent}
        
        <div className="btn-group">
          <button type="button" className="btn btn-warning button-edit-post" data-toggle="modal" data-target="#edit-post-modal">Edit</button>
          <button type="button" className="btn btn-danger button-delete-post">Delete</button>
        </div>
        <hr/>
      </div>
    )
  }
}