import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <h1 className="display-4">Turn Your Investments Into Profits</h1>
                    <p className="lead">- We Can Help Get you there</p>
                    <Link to="/about" className="btn btn-outline-warning btn-lg">
                      Meet The Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item carousel-image-2">
              <div className="dark-overlay">
                <div className="container text-align-top-center">
                  <div className="justify-content-end carousel-caption d-none d-sm-block mb-5 text-center">
                    <h1 className="display-4">90% of millionaires have been created by investing in real estate</h1>
                    <p className="lead" />
                    <Link to="/about">
                      <button className="btn btn-lg btn-primary">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-3">
              <div className="dark-overlay">
                <div className="container text-align-top-center">
                  <div className="justify-content-end carousel-caption d-none d-sm-block mb-5 text-right">
                    <div style={{ marginBottom: '80px' }}>
                      <h1 className="display-4">Invest In Multifamily, Be Financially Free</h1>
                      <p className="lead" />
                      <Link to="/markets">
                        <button className="btn btn-lg btn-info">See Packages</button>
                      </Link>
                    </div>
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
