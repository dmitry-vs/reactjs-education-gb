import React from 'react';
import axios from 'axios';

import Post from '../components/post';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
    }

    this.url = 'https://jsonplaceholder.typicode.com/posts';
    this.subHeader = 'This is Posts page';

    if(this.props.match.params.id) {
      this.url += `/${this.props.match.params.id}`;
      this.subHeader = <span>Post with ID: {this.props.match.params.id}</span>
    }
  }
  
  componentWillMount() {
    axios.all([
      axios.get(this.url),
      axios.get('https://jsonplaceholder.typicode.com/users'),
    ])
    .then(axios.spread((posts, users) => {
      this.setState({
        posts: posts.data instanceof Array ? posts.data.filter(item => item.hasOwnProperty('title')) : [posts.data], 
        users: users.data,
      });
    }));
  }

  render() {
    let content = this.state.posts.map((item, index) => {
      let username = this.state.users.filter(user => user.id === item.userId)[0].username;
      return <Post key={index} id={item.id} title={item.title} content={item.body} 
        authorName={username} authorId={item.userId}/>
    });
    
    return(
      <div>
        <h1>Posts</h1>
        <p>{this.subHeader}</p>
        <hr/>
        {!this.state.posts.length ? 'Loading...' : content}
      </div>
    )
  }
}