import React, { Component } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl';
class MapBox extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = async () => {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
    const mapboxToken =
      'pk.eyJ1IjoiYXBhdGkwNCIsImEiOiJjamFraWtwOWUyamdpMndvMmc1bWNvMnowIn0.QUnCBEj6objBvZoWPa0UTQ';
    const request = await axios.get(
      `${mapboxUrl}/${this.props.address}.json?access_token=${mapboxToken}`
    );
    const { data } = request;

    const lng = data.features[0].center[0];
    const lat = data.features[0].center[1];

    mapboxgl.accessToken =
      'pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg';
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom: 12,
      pitch: 6
    });
  };

  render() {
    return (
      <div
        className="ml-auto mb-3 z-depth-1 rounded-circle"
        id="mapbox"
        style={{
          height: 20 + 'em',
          width: 20 + 'em'
        }}
      />
    );
  }
}

export default MapBox;
