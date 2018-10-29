import React from 'react';
import Moment from 'react-moment';

export default class Blog extends React.Component {
  render() {
    let featuredPostsHead = this.props.posts.filter(post => post.name === this.props.featuredPosts.head)[0];
    let featuredPostLeft = this.props.posts.filter(post => post.name === this.props.featuredPosts.leftBox)[0];
    let featuredPostRight = this.props.posts.filter(post => post.name === this.props.featuredPosts.rightBox)[0];

    return(
      <div id="wraper">
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="#">Subscribe</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">Large</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              {/* <a className="text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              </a> */}
              <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
          </div>
        </header>
        
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {this.props.navbarItems.map((item, index) => <a className="p-2 text-muted" href="#" key={index}>{item.name}</a>)}
          </nav>
        </div>
        
        {/* render featured posts */}
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">{featuredPostsHead.name}</h1>
            <p className="lead my-3">{featuredPostsHead.headline}</p>
            <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">{featuredPostLeft.group}</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">{featuredPostLeft.name}</a>
                </h3>
                <div className="mb-1 text-muted"><Moment format="MMM D">{featuredPostLeft.date}</Moment></div>
                <p className="card-text mb-auto">{featuredPostLeft.headline}</p>
                <a href="#">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">{featuredPostRight.group}</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">{featuredPostRight.name}</a>
                </h3>
                <div className="mb-1 text-muted"><Moment format="MMM D">{featuredPostRight.date}</Moment></div>
                <p className="card-text mb-auto">{featuredPostRight.headline}</p>
                <a href="#">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"/>
            </div>
          </div>
        </div>
      </div>
      
      {/* render all posts */}
      <main></main>
      
      {/* render footer */}
      <footer className="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
      </div>
    );
  }
}