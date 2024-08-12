import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '88%', zIndex: '1'}}>{source}</span>
          <img src={imageURL?imageURL:"https://images.livemint.com/img/2024/08/04/1600x900/5_1722579383317_1722740443688.JPG"} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5><span className="badge rounded-pill bg-success">By {author === null ? 'unknown' : author}</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-dark">Published on {date === null ? 'unknown' : new Date(date).toGMTString()}</small></p>
            <Link to={newsURL} target="_blank" className="btn btn-sm btn-dark">Go somewhere</Link>
              </div>
        </div>
      </div>
    )
  }
}

export default NewsItem