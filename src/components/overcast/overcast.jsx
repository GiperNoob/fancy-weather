import React from "react";
import "./overcast.css";

import Image from "../../assets/cloudy.svg";
import ring from "../../assets/ring.png";

const Overcast = (props) => {
  const { feelsLike, humidity, wind } = props;
  return (
    <div className="overcast">
      <div>
        <img src={Image} alt="lio" className="lio" />
      </div>

      <div className="info__text">
        <span>overcast</span>
        <span>
          feels like: {feelsLike}
          <img src={ring} alt="ring" className="little-ring-overcast" />
        </span>
        <span>wind: {wind} m/s</span>
        <span>humidity: {humidity}%</span>
      </div>
    </div>
  );
};

export default Overcast;
