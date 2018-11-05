import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showContent: true};
    this.onShowContent = this.onShowContent.bind(this);
  }
  
  onShowContent() {
    this.setState({showContent: !this.state.showContent});
  }

  render() {
    let postContent;
    if(this.state.showContent) {
      postContent = <div>
        {this.props.content}<br/><br/>
      </div>
    }
    
    return(
      <div className="blog-post" data-id={this.props.id}>
        <h2 className="blog-post-title" onClick={this.onShowContent} style={{cursor: 'pointer'}}>{this.props.title}</h2>
        <p className="blog-post-meta">by <a href="#">{this.props.author}</a></p>
        
        {postContent}
        
        <hr/>
      </div>
    )
  }
}