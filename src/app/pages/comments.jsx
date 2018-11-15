import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import {getComments} from "../actions/commentsAction";
import Comment from '../components/comment';

class Comments extends React.Component {
  componentDidMount() {
    this.props.dispatch(getComments(this.props.match.params.postId));
  }
  
  render() {
    let subHeader = this.props.match.params.postId ? `Comments for post with ID: ${this.props.match.params.postId}` : 'This is Comments page';

    let content = <ul>
      {this.props.comments.map((comment, index) => 
        <li key={index}>
          <Comment name={comment.name} email={comment.email} body={comment.body}/>
          <Link to={`/posts/${comment.postId}`}>See post</Link>
          <br/><br/>
        </li>
      )}
    </ul>;
    
    return(
      <div>
        <h1>Comments</h1>
        <p>{subHeader}</p>
        <hr/>
        {this.props.isLoading ? 'Loading...': content}
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    comments: store.comments.comments,
    isLoading: store.comments.isLoading,
  }
}

export default connect(mapStateToProps)(Comments);