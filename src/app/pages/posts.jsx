import React from 'react';
import {connect} from "react-redux";
// import axios from 'axios';

import {getPosts, deletePost, addPost} from "../actions/postsAction";
import Post from '../components/post';

class Posts extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loadedData: false,
  //     posts: [],
  //     users: [],
  //   }

  //   this.url = 'https://jsonplaceholder.typicode.com/posts';
  //   this.subHeader = 'This is Posts page';

  //   if(this.props.match.params.id) {
  //     this.url += `/${this.props.match.params.id}`;
  //     this.subHeader = <span>Post with ID: {this.props.match.params.id}</span>
  //   }
  // }
  
  // componentWillMount() {
  //   axios.all([
  //     axios.get(this.url),
  //     axios.get('https://jsonplaceholder.typicode.com/users'),
  //   ])
  //   .then(axios.spread((posts, users) => {
  //     this.setState({
  //       loadedData: true,
  //       posts: posts.data instanceof Array ? posts.data.filter(item => item.hasOwnProperty('title')) : [posts.data], 
  //       users: users.data,
  //     });
  //   }))
  //   .catch(err => this.setState({
  //     loadedData: true,
  //     posts: [],
  //     users: [],
  //   }));
  // }

  componentDidMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    console.log(this.props);
    let content = this.props.posts.map((item, index) => {
      // let username = this.state.users.filter(user => user.id === item.userId)[0].username;
      return <Post key={index} id={item.id} title={item.title} content={item.body} 
        authorName={'Test'} authorId={item.userId}/>
    });
    
    return(
      <div>
        <h1>Posts</h1>
        <p>This is Posts page</p>
        {/* <p>{this.subHeader}</p> */}
        <hr/>
        {/* {this.state.loadedData ? content : 'Loading...'} */}
        {this.props.isLoading ? 'Loading...' : content}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    posts: store.posts.posts,
    isLoading: store.posts.isLoading,
  }
}

export default connect(mapStateToProps)(Posts);