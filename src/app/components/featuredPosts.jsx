import React from 'react';
import Moment from 'react-moment';

export default class FeaturedPosts extends React.Component {
  render() {
    return(
      <div>
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">{this.props.featuredPostsHead.name}</h1>
            <p className="lead my-3">{this.props.featuredPostsHead.headline}</p>
            <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">{this.props.featuredPostLeft.group}</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">{this.props.featuredPostLeft.name}</a>
                </h3>
                <div className="mb-1 text-muted"><Moment format="MMM D">{this.props.featuredPostLeft.date}</Moment></div>
                <p className="card-text mb-auto">{this.props.featuredPostLeft.headline}</p>
                <a href="#">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">{this.props.featuredPostRight.group}</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">{this.props.featuredPostRight.name}</a>
                </h3>
                <div className="mb-1 text-muted"><Moment format="MMM D">{this.props.featuredPostRight.date}</Moment></div>
                <p className="card-text mb-auto">{this.props.featuredPostRight.headline}</p>
                <a href="#">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}