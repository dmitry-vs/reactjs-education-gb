import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Comment from '../components/comment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }

    this.url = 'https://jsonplaceholder.typicode.com';
    this.subHeader = 'This is Comments page';

    if(this.props.match.params.postId) {
      this.url = `${this.url}/posts/${this.props.match.params.postId}/comments`;
      this.subHeader = <span>Comments for post with ID: {this.props.match.params.postId}</span>
    }
    else {
      this.url += '/comments';
    }
  }
  
  componentWillMount() {
    axios.get(this.url)
    .then(response => this.setState({comments: response.data}));
  }
  
  render() {
    let content = <ul>
      {this.state.comments.map((comment, index) => 
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
        <p>{this.subHeader}</p>
        <hr/>
        {!this.state.comments.length ? 'Loading...' : content}
      </div>
    )
  }
}