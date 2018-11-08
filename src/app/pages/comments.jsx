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

    this.url = 'https://jsonplaceholder.typicode.com/comments';
    this.subHeader = 'This is Comments page';
    // if(this.props.location.query.email) {
    //   this.url += `?email=${this.props.location.query.email}`;
    //   this.subHeader = <span>Comments by: <a href={`mailto:${this.props.location.query.email}`}>{this.props.location.query.email}</a></span>;
    // }
  }
  
  componentWillMount() {
    axios.get(this.url)
    .then(response => this.setState({comments: response.data}));
  }
  
  render() {
    return(
      <div>
        <h1>Comments</h1>
        <p>{this.subHeader}</p>
        <hr/>
        <ul>
          {this.state.comments.map((comment, index) => 
            <li key={index}>
              <Comment name={comment.name} email={comment.email} body={comment.body}/>
              <Link to={`/posts?postId=${comment.postId}`}>See post</Link>
              <br/><br/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}