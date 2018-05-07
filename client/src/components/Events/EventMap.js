import React, { Component } from 'react';
import MapBox from '../MapBox';
class EventMap extends Component {
  render() {
    const {
      id,
      lat,
      lon,
      name,
      address_1,
      city,
      state
    } = this.props.meetupLocation;
    console.log(this.props.meetupLocation);
    return (
      <div>
        <div>
          <div>
            <MapBox
              mapStyle={{ height: 22 + 'em', width: 22 + 'em' }}
              lat={lat}
              lng={lon}
              mapMarker
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EventMap;
