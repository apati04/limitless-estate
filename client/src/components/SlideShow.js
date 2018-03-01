import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SlideShow extends Component {
  render() {
    return (
      <section id="asdf">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* ___ bottom of slideshow */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active" />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          {/* main slide show */}
          <div className="carousel-inner">
            <div className="carousel-item carousel-image-1 active">
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">Turn Your Dreams Into Reality</h1>
                    <p className="lead">- Limitless Is Where Dreams Come Home</p>
                    <Link to="/about" className="btn btn-outline-light btn-lg">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item carousel-image-2">
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">We Will Take You On A Journey</h1>
                    <p className="lead">- Limitless Is Here To Help</p>
                    <Link to="/resources" className="btn btn-outline-light btn-lg">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-3">
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">Opportunities Are Limitless</h1>
                    <p className="lead">- Limitless Can Guide You Home</p>
                    <Link to="/markets" className="btn btn-outline-light btn-lg">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a href="#myCarousel" data-slide="next" className="carousel-control-next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </section>
    );
  }
}
export default SlideShow;
