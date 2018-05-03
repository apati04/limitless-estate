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
        <h4>{name}</h4>
        <h5>{address_1}</h5>
        <h5>
          {city}, {state}
        </h5>
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
