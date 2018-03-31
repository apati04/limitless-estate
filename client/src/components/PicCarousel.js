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
import classNames from 'classnames';
class PicCarousel extends Component {
  state = {
    activeItem: 1,
    maxLength: 3
  };
  newRef = React.createRef();
  next = () => {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState(function(prevState, props) {
        return { activeItem: 1 };
      });
    } else {
      this.setState(function(prevState, props) {
        const nextI = prevState.activeItem + 1;
        return { activeItem: nextI };
      });
    }
  };
  prev = () => {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState(function(prevState, props) {
        console.log('props: ', props);
        return { activeItem: prevState.maxLength };
      });
    } else {
      this.setState(function(prevState, props) {
        console.log('props 37: ', props);
        const newItem = prevState.activeItem - 1;
        return {
          activeItem: newItem
        };
      });
    }
  };
  componentWillUnmount() {
    clearInterval(this.newRef.current.cycleInterval);
  }

  render() {
    const caption = (
      <Mask className="d-flex flex-column justify-content-center align-items-center">
        <div className="row w-75 align-items-center justify-content-center">
          <div className="col">
            <h3 className="h3-responsive mb-4 text-center white-text">
              Our vision at Limitless Estates is to provide A-class living to
              lower income housing by putting our residents first and instilling
              a sense of community while inspiring others to do the same.
            </h3>
            <h3 className="h3-responsive mb-4 text-center white-text">
              Our mission is to positively impact the lives of the people in our
              local neighborhoods through{' '}
              <a style={{ color: 'cyan' }} href="/resources/impactinvesting">
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
    console.log(this.newRef);
    return (
      <section>
        <Carousel
          activeItem={this.state.activeItem}
          className="slide d-none d-md-block z-depth-1"
          next={this.next}
          ref={this.newRef}
        >
          <CarouselInner ref={this.newRef} className="carousel-fade">
            <CarouselItem itemId="2">
              <View className="hm-black-light">
                <img
                  className="w-100 d-block"
                  src="https://i.imgur.com/MEac1d0.jpg?1"
                  alt="Second Slide"
                />
                {caption}
              </View>
            </CarouselItem>
            <CarouselItem itemId="1">
              <View className="hm-black-light">
                <img
                  className="w-100 d-block"
                  src="https://i.imgur.com/BI90AZ5.jpg?2"
                  alt="First Slide"
                />
                {caption}
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View className="hm-black-light">
                <img
                  className="w-100 d-block"
                  src="https://i.imgur.com/jZscfQg.jpg?2"
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
              src="https://i.imgur.com/BI90AZ5.jpg?1"
              alt="First Slide"
            />
          </View>
          <div className="p-2 rgba-bluegrey-slight">
            <h3 className="m-2 h5-responsive text-center">
              Our vision at Limitless Estates is to provide A-class living to
              lower income housing by putting our residents first and instilling
              a sense of community while inspiring others to do the same.
            </h3>
          </div>
          <div className="p-2 rgba-grey-slight">
            <h6 className="m-2 text-center h5-responsive">
              Our mission is to positively impact the lives of the people in our
              local neighborhoods through{' '}
              <NavLink to="/resources/impactinvesting">
                impact investing
              </NavLink>{' '}
              while achieving double digit returns for our investors.
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default PicCarousel;
