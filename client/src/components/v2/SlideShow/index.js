import React, { Component } from 'react';

class SlideShow extends Component {
  render() {
    return (
      <section id="asdf">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* ___ bottom of slideshow */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
           <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          {/* main slide show */}
          <div className="carousel-inner">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="carousel-item carousel-image-1 active">
=======
            <div className="carousel-item carousel-image-0 active">
=======
            <div className="carousel-item carousel-image-1 active">
>>>>>>> packages styling
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">Heading</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="btn btn-outline-warning btn-lg">Learn More</button>
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="carousel-item carousel-image-1">
>>>>>>> add package page and a reuseable pageheader component
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">Heading</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="btn btn-outline-warning btn-lg">Learn More</button>
                  </div>
                </div>
            </div>

=======
>>>>>>> packages styling
            <div className="carousel-item carousel-image-2">
              <div className="dark-overlay">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 className="display-3">"Mission Statement Here"</h1>
                    <p className="lead">~Lalita Patipaksiri, Co-Founder</p>
                    <button className="btn btn-primary btn-lg">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
              <div className="carousel-item carousel-image-3">
                <div className="dark-overlay">
                  <div className="container">
                    <div className="carousel-caption d-none d-sm-block text-right mb-5">
                      <h1 className="display-3">Heading Three</h1>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consequuntur architecto eius magni nobis nulla eaque. Deserunt sunt, distinctio quos.</p>
                      <a href="#" className="btn btn-success btn-lg">Learn More</a>
                  </div>
                </div>
                </div>
            </div>
          </div>
            <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a href="#myCarousel" data-slide="next" className="carousel-control-next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
      </section>
    )
  }
}
export default SlideShow;
