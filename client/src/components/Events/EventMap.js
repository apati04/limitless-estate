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
      <MapBox
        mapStyle={{
          height: 22 + 'em',
          width: '100%',
          maxHeight: '100%'
        }}
        lat={lat}
        lng={lon}
        mapMarker
        zoomLevel={13}
      />
    );
  }
}

export default EventMap;
