import React from 'react';
import {Link} from 'react-router';

import Comment from './comment';

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
        <ul>
          {this.props.comments.map((comment, index) => 
            <li key={index}><Comment name={comment.name} email={comment.email} body={comment.body}/></li>
          )}
        </ul>
        <br/>
      </div>
    }
    
    return(
      <div className="blog-post" data-id={this.props.id}>
        <h2 className="blog-post-title" onClick={this.onShowContent} style={{cursor: 'pointer'}}>{this.props.title}</h2>
        <p className="blog-post-meta">by <Link to={`/users?username=${this.props.author}`}>{this.props.author}</Link></p>
        {postContent}
        <hr/>
      </div>
    )
  }
}