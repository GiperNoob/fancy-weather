import React from "react";
import GoogleMapReact from "google-map-react";
import "./SimpleMap.css";

const SimpleMap = (props) => {
  const { latitude, longitude } = props;

  const zoom = 10;

  const location = {
    lat: 55.584222181163646,
    lng: 37.38552449999999,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "your key" }}
        defaultCenter={location}
        defaultZoom={zoom}
        center={{ lat: latitude, lng: longitude }}
      ></GoogleMapReact>

      <div className="latitude">latitude: {latitude}'</div>
      <div className="longitude">longitude: {longitude}'</div>
    </div>
  );
};

export default SimpleMap;
