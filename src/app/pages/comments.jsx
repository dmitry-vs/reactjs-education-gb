import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import Comment from '../components/comment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }
  
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => this.setState({comments: response.data}));
  }
  
  render() {
    return(
      <div>
        <h1>Comments</h1>
        <p>This is Comments page</p>
        <hr/>
        <ul>
          {this.state.comments.map((comment, index) => 
            <li key={index}>
              <Comment name={comment.name} email={comment.email} body={comment.body}/>
              <Link to={`/blog?postId=${comment.postId}`}>See post</Link>
              <br/><br/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}