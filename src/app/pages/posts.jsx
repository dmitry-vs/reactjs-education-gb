import React from 'react';
import axios from 'axios';

import Post from '../components/post';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      comments: [],
    }

    this.url = 'https://jsonplaceholder.typicode.com/posts';
    this.subHeader = 'This is Posts page';

    if(this.props.match.params.id) {
      this.subHeader = <span>Post with ID: {this.props.match.params.id}</span>
      this.url += `/${this.props.match.params.id}`;
    }
  }
  
  componentWillMount() {
    axios.all([
      axios.get(this.url),
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ])
    .then(axios.spread((posts, users, comments) => {
      this.setState({
        posts: posts.data instanceof Array ? posts.data.filter(item => item.hasOwnProperty('title')) : [posts.data], 
        users: users.data,
        comments: comments.data,
      });
    }));
  }

  render() {
    return(
      <div>
        <h1>Posts</h1>
        <p>{this.subHeader}</p>
        <hr/>

        {this.state.posts.map((item, index) => {
          let username = this.state.users.filter(user => user.id === item.userId)[0].username;
          let comments = this.state.comments.filter(comment => comment.postId === item.id);
          return <Post key={index} id={item.id} title={item.title} content={item.body} 
            authorName={username} authorId={item.userId} comments={comments}/>
        })}
      </div>
    )
  }
}