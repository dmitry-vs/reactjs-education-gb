import React from 'react';
import {Link} from 'react-router-dom';

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
        <div className="blog-post-content">{this.props.content}</div>
        <br/><br/>
        <Link to={`/comments/${this.props.id}`}>See comments</Link><br/><br/>
        <div className="btn-group">
          <button type="button" className="btn btn-warning button-edit-post" data-toggle="modal" data-target="#edit-post-modal">Edit</button>
          <button type="button" className="btn btn-danger button-delete-post">Delete</button>
        </div>
      </div>
    }
    
    return(
      <div className="blog-post" data-id={this.props.id}>
        <h2 className="blog-post-title" onClick={this.onShowContent} style={{cursor: 'pointer'}}>{this.props.title}</h2>
        <p className="blog-post-meta">by <Link to={`/users/${this.props.authorId}`}>{this.props.authorName}</Link></p>
        {postContent}
        <hr/>
      </div>
    )
  }
}