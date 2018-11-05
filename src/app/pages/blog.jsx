import React from 'react';
import axios from 'axios';

import Post from '../components/post';
import EditPostModal from '../components/editPostModal';
import Config from '../components/config';

// blog page - get and render posts from web
// blog page - add comments to posts
// comments page - get and render comments from web
// comments page - add links to corresponding posts
// users page - get and render users from web
// * users page - show info (modal?) on click with all posts
// * blog - show info (modal?) on click with user info

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => this.setState({posts: response.data}));
  }
  
  render() {
    if(!this.state.posts.length) {
      return null; // posts not loaded yet
    }
    
    return(
      <div>
        <h1>Blog</h1>
        <p>This is Blog page</p>
        <hr/>

        {this.state.posts.reverse().map((item, index) => 
          <Post key={index} id={item.id} title={item.title} date={item.date} author={item.userId} content={item.body} />)}
        <EditPostModal/>

        <nav className="blog-pagination">
          <a className="btn btn-outline-primary" href="#">Older</a>
          <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
      </div>
    )
  }
}