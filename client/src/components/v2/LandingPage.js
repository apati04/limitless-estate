import React, {Component} from 'react';
import SlideShow from './SlideShow';
import IconSection from './IconSection';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <IconSection />
      </div>
    )
  }
}

export default LandingPage;
