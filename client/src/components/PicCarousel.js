import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselControl,
  View,
  Mask,
  Button
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
      <Mask className="rgba-black-light d-flex flex-column justify-content-center align-items-center">
        <div className="row w-75 align-items-center justify-content-center">
          <div className="col">
            <h3
              style={{ fontWeight: 500 }}
              className="h2-responsive carousel-text mb-4 text-center white-text"
            >
              Our <strong>vision</strong> at Limitless Estates is to provide
              A-class living to lower income housing by putting our residents
              first and instilling a sense of community while inspiring others
              to do the same.
            </h3>
            <h3
              style={{ fontWeight: 400 }}
              className="h2-responsive carousel-text mb-4 text-center white-text"
            >
              Our <strong>mission</strong> is to positively impact the lives of
              the people in our local neighborhoods through{' '}
              <a
                style={{ fontWeight: 'bold', color: 'cyan' }}
                href="/resources/impactinvesting"
              >
                impact investing
              </a>{' '}
              while achieving double digit returns for our investors.
            </h3>
            <div className="d-none d-lg-block mt-4 text-center">
              <a href="info/questionnaire">
                <Button>Make an impact</Button>
              </a>
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
            <CarouselItem itemId="2">
              <View className="hm-black-light">
                <img
                  className="w-100 img-fluid"
                  src="https://i.imgur.com/WjS34vz.jpg?1"
                  alt="Second Slide"
                />
                {caption}
              </View>
            </CarouselItem>
            <CarouselItem itemId="1">
              <View className="hm-black-light">
                <img
                  className="w-100 img-fluid"
                  height="720px"
                  src="https://i.imgur.com/BI90AZ5.jpg?1"
                  alt="First Slide"
                />
                {caption}
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View className="hm-black-light">
                <img
                  height="720px"
                  className="w-100 img-fluid"
                  src="https://i.imgur.com/gCWlQRW.jpg?2"
                  alt="Third Slide"
                />
                {caption}
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
        <div className="d-block d-md-none">
          <View className="hm-black-light">
            <img
              className="w-100 img-fluid"
              height="720px"
              src="https://i.imgur.com/BI90AZ5.jpg?1"
              alt="First Slide"
            />
          </View>
          <div className="p-4 rgba-bluegrey-slight">
            <h3
              style={{ lineHeight: 1.5 }}
              className="h1-responsive carousel-text"
            >
              <strong>Our vision</strong> at Limitless Estates is to provide
              A-class living to lower income housing by putting our residents
              first and instilling a sense of community while inspiring others
              to do the same.
            </h3>
          </div>
          <div className="p-4 rgba-grey-slight">
            <h3
              style={{ lineHeight: 1.5 }}
              className="h1-responsive carousel-text"
            >
              <strong>Our mission</strong> is to positively impact the lives of
              the people in our local neighborhoods through{' '}
              <NavLink to="/resources/impactinvesting">
                impact investing
              </NavLink>{' '}
              while achieving double digit returns for our investors.
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

export default PicCarousel;
