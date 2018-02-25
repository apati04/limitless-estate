import React, { Component } from "react";
import keys from '../config/keys';
import axios from "axios";
import mapboxgl from "mapbox-gl";

class MapBox extends Component {

  componentDidMount() {
    this.renderMap();
  }

  renderMap = async () => {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
    const mapboxToken = keys.mapboxToken;
    const request = await axios.get(`${mapboxUrl}/${this.props.address}.json?access_token=${mapboxToken}`);
    const { data } = request;

    const lng = data.features[0].center[0];
    const lat = data.features[0].center[1];

    mapboxgl.accessToken = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";
    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [ lng, lat ],
      zoom: 15
    });
    new mapboxgl.Marker().setLngLat([ lng, lat ]).addTo(map);
  }

  render() {
    return (
      <div className="mb-3" id="mapbox" style={{ height: "30vh", width: "100%", border: '3px outset',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'}}></div>
    )
  }
}

export default MapBox;
