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

  goToIndex = item => {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  };

  render() {
    const caption = (
      <Mask>
        <div className="container d-flex justify-content-center flex-center align-items-center flex-column text-white text-center">
          <h2 className="p-2 display-3 border-bottom">Vision Mission Values</h2>
          <div className="p-5">
            <h2>
              Our vision at Limitless Estates is to provide A class living to
              lower income housing by putting our residents first and instilling
              a sense of community while inspiring others to do the same.
            </h2>
            <h2 className="mt-2">
              Our mission is to positively impact the lives of the people in our
              local neighborhoods through{' '}
              <NavLink to="/resources/impactinvesting">
                impact investing
              </NavLink>{' '}
              while achieving double digit returns for our investors.
            </h2>
          </div>
        </div>
      </Mask>
    );

    return (
      <Carousel
        activeItem={this.state.activeItem}
        next={this.next}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View className="hm-black-light">
              <img
                style={{ opacity: '0.9' }}
                className="w-100 d-block"
                src="https://i.imgur.com/WjS34vz.jpg?1"
                alt="Second Slide"
              />
              <div className="container">{caption}</div>
            </View>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View className="hm-black-light">
              <img
                style={{ opacity: '0.9' }}
                className="w-100 d-block"
                src="https://i.imgur.com/ZdmIZpe.jpg?2"
                alt="First Slide"
              />
              {caption}
            </View>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                style={{ opacity: '0.9' }}
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
    );
  }
}

export default PicCarousel;
