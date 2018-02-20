import React, {Component} from 'react';
import SlideShow from './SlideShow';
import IconSection from './IconSection';
import LandingParallax from './LandingParallax';
import InfoSection from './InfoSection';
import LandingCommercial from './LandingCommercial';

class LandingPage extends Component {
  state = {
    videoClicked: false
  }
  renderVideo() {
    let controls = "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    let videosrc = "https://www.youtube.com/embed/btPJPFnesV4?list=RDdQw4w9WgXcQ"
    if (this.state.videoClicked) {
      return (
        <iframe src={`${videosrc}${controls}`} height="350" width="100%" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
      )
    }
    else {
      return (
        <iframe src="" height="350" width="100%" frameBorder="0" allowFullScreen></iframe>  
    )
    }

  }
  render() {
    return (
      <div>
        <SlideShow />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <LandingCommercial />
       
        <div className="modal fade" id="videoModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button onClick={()=>{ this.setState({ videoClicked: false})}}className="close" data-dismiss="modal"><span>&times;</span></button>
                {this.renderVideo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
