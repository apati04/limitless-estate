import React, { Component } from 'react';
import summary from './summary_data';
import { NavLink } from 'react-router-dom';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
const styles = {
  header: {
    padding: '0',
    background: 'url(https://i.imgur.com/BZOlfik.jpg?1) center no-repeat',
    backgroundSize: 'cover',
    height: 25 + 'em'
  }
};
class Columbus extends Component {
  renderContent = () => {
    const main = summary[0].body;
    const { list } = summary[1];
    const body = main.map((e, i) => (
      <p className="textblockclass" key={i}>
        {e}
      </p>
    ));
    const listItems = list.map((e, i) => <li key={i}>{e}</li>);
    return (
      <div className="mt-4">
        {body}
        <ul>{listItems}</ul>
      </div>
    );
  };

  render() {
    const [lat, lng] = [39.9512919, -82.9901501];
    return (
      <div className="animated fadeIn z-depth-0">
        <div style={styles.header} />

        <div className="container">
          <div className="row justify-content-around my-4">
            <div className="col-12 col-md-8 text-left text-justify">
              <div>
                <h3 className="h3-responsive text-center text-md-left mb-4">
                  Columbus, OH
                </h3>
                <div className="border-bottom" />
                {this.renderContent()}
                <div className="text-center text-sm-left">
                  <NavLink
                    className="btn btn-lg btn-primary white-text"
                    to="/markets/columbus/sdp"
                  >
                    Sample Deal Package
                  </NavLink>
                </div>
              </div>
            </div>

            <div
              style={{
                marginRight: -1 + 'em',
                height: '300px',
                width: '100%'
              }}
              className="pr-0 col-md-4 d-none d-md-block"
            >
              <GoogleMap
                centerMap={{ lat, lng }}
                mapLng={lng}
                mapLat={lat}
                zoomLevel={10}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Columbus;
