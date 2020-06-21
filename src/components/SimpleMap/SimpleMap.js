import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './SimpleMap.css';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844
    },
    zoom: 10,
  };

  render() {
    const { lat, lng } = this.props.center;
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "Your Api Key" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
        <div className="latitude">latitude: {lat}'</div>
        <div className="longitude">longitude: {lng}'</div>
      </div>
    );
  }
}

export default SimpleMap;
