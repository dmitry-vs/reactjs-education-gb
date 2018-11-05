import React from 'react';
import axios from 'axios';

import Post from '../components/post';

// comments page - add links to corresponding posts
// users page - get and render users from web
// * users page - show info (modal?) on click with all posts
// * blog - show info (modal?) on click with user info
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
    if(!this.state.posts.length || !this.state.users.length) {
      return null; // data not loaded yet
    }
    
    console.log(this.state);

    return(
      <div>
        <h1>Blog</h1>
        <p>This is Blog page</p>
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