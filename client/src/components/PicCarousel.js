import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, CarouselControl } from 'mdbreact';

class PicCarousel extends Component {
  constructor(props) {
  super(props);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
  this.state = {
    activeItem: 1,
    maxLength: 3
  };
}

next() {
  const nextItem = this.state.activeItem + 1;
  if(nextItem > this.state.maxLength) {
    this.setState({ activeItem: 1 });
  } else {
    this.setState({ activeItem: nextItem });
  }
}

prev() {
  const prevItem = this.state.activeItem - 1;
  if(prevItem < 1) {
    this.setState({ activeItem: this.state.maxLength });
  } else {
    this.setState({ activeItem: prevItem });
  }
}

goToIndex(item) {
  if (this.state.activeItem !== item) {
    this.setState({
      activeItem: item
    });
  }
}

  render() {
    return (
      <Carousel
        activeItem={this.state.activeItem}
        next={this.next}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <div className="view hm-black-light">
              <img className="d-block w-100" src="https://i.imgur.com/ZdmIZpe.jpg?2" alt="First Slide" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="2">
            <div className="view hm-black-slight">
              <img className="d-block w-100" src="https://i.imgur.com/WjS34vz.jpg?1" alt="Second Slide" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
          <CarouselItem itemId="3">
            <div className="view hm-black-slight">
              <img className="d-block w-100" src="https://i.imgur.com/gCWlQRW.jpg?2" alt="Third Slide" />
              <div className="mask"></div>
            </div>
          </CarouselItem>
        </CarouselInner>
        <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
        <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
      </Carousel>
    );
  }
}

export default PicCarousel;
