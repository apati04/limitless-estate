import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  View,
  Mask
} from 'mdbreact';

class PicCarousel extends Component {
  state = {
    activeItem: 1,
    maxLength: 3
  };
  next = () => {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  };

  prev = () => {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  };
  render() {
    const caption = (
      <Mask className="d-flex justify-content-between align-items-center">
        <div className="container">
          <div className="row d-flex flex-column flex-wrap justify-content-center align-items-center">
            <div className="col-md-10">
              <h3
                style={{ lineHeight: 1.5 }}
                className="h2-responsive carousel-text text-white text-justify"
              >
                <strong>Our vision</strong> at Limitless Estates is to provide
                A-class living to lower income housing by putting our residents
                first and instilling a sense of community while inspiring others
                to do the same.
              </h3>
            </div>
            <div className="col-md-10 mt-2">
              <h3
                style={{ lineHeight: 1.5 }}
                className="h2-responsive carousel-text text-white text-justify"
              >
                <strong>Our mission</strong> is to positively impact the lives
                of the people in our local neighborhoods through{' '}
                <NavLink to="/resources/impactinvesting">
                  impact investing
                </NavLink>{' '}
                while achieving double digit returns for our investors.
              </h3>
            </div>
          </div>
        </div>
      </Mask>
    );

    return (
      <section>
        <Carousel
          activeItem={this.state.activeItem}
          className="d-none d-md-block z-depth-1"
          next={() => {
            this.next;
          }}
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View style={{ opacity: 0.9 }} className="hm-black-strong">
                <img
                  className="w-100 img-fluid"
                  src="https://i.imgur.com/WjS34vz.jpg?1"
                  alt="Second Slide"
                />
                <div className="container">{caption}</div>
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View style={{ opacity: 0.9 }} className="hm-black-strong">
                <img
                  className="w-100 img-fluid"
                  height="720px"
                  src="https://i.imgur.com/BI90AZ5.jpg?1"
                  alt="First Slide"
                />
                <div className="container"> {caption}</div>
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View style={{ opacity: 0.9 }} className="hm-black-strong">
                <img
                  height="720px"
                  className="w-100 img-fluid"
                  src="https://i.imgur.com/gCWlQRW.jpg?2"
                  alt="Third Slide"
                />
                <div className="container"> {caption}</div>
              </View>
            </CarouselItem>
          </CarouselInner>
          <CarouselControl
            direction="prev"
            role="button"
            onClick={() => {
              this.prev();
            }}
          />
          <CarouselControl
            direction="next"
            role="button"
            onClick={() => {
              this.next();
            }}
          />
        </Carousel>
        <div />
      </section>
    );
  }
}

export default PicCarousel;
