import React from 'react';
import Moment from 'react-moment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    

  }
  
  render() {
    return(
      <div className="blog-post">
        <h2 className="blog-post-title">{this.props.name}</h2>
        <p className="blog-post-meta">
          <Moment format="MMMM D, YYYY">{this.props.date}</Moment> by <a href="#">{this.props.author}</a>
        </p>
        {this.props.content}
        <br/><br/>
        <div className="btn-group">
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
        <hr/>
      </div>
    )
  }
}