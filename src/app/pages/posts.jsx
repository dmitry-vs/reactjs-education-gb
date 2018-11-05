import React from 'react';
import axios from 'axios';

import Post from '../components/post';

// blog and comments - show emails as links with mailto

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      comments: [],
    }

    this.postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    if(this.props.location.query.postId) {
      this.postsUrl += `?id=${this.props.location.query.postId}`;
    } else if(this.props.location.query.userId) {
      this.postsUrl += `?userId=${this.props.location.query.userId}`;
    }
  }
  
  componentWillMount() {
    axios.all([
      axios.get(this.postsUrl),
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ])
    .then(axios.spread((posts, users, comments) => {
      this.setState({
        posts: posts.data.filter(item => item.hasOwnProperty('title')), 
        users: users.data,
        comments: comments.data,
      });
    }));
  }

  render() {
    return(
      <div>
        <h1>Posts</h1>
        <p>This is Posts page</p>
        <hr/>

        {this.state.posts.map((item, index) => {
          let username = this.state.users.filter(user => user.id === item.userId)[0].username;
          let comments = this.state.comments.filter(comment => comment.postId === item.id);
          return <Post key={index} id={item.id} title={item.title} content={item.body} author={username} comments={comments}/>
        })}
      </div>
    )
  }
}