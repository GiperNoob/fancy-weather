import React from "react";
import "./days.css";

import firstImg from "../../assets/cloudy-day-1.svg";
import secondImg from "../../assets/cloudy-day-2.svg";
import thirdImg from "../../assets/cloudy-day-3.svg";
import ring from "../../assets/ring.png";

const Days = (props) => {
  const { firstDay, secondDay, thirdDay } = props;
  return (
    <div className="days">
      <div className="first">
        <span className="day">Monday</span>
        <div className="days__img-degrees">
          <span>{firstDay}</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={firstImg} alt="weather-img" className="weather-img" />
        </div>
      </div>

      <div className="second">
        <span className="day">Tuesday</span>
        <div className="days__img-degrees">
          <span>{secondDay}</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={secondImg} alt="weather-img" className="weather-img" />
        </div>
      </div>

      <div className="third">
        <span className="day">Wednesday</span>
        <div className="days__img-degrees">
          <span>{thirdDay}</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={thirdImg} alt="weather-img" className="weather-img" />
        </div>
      </div>
    </div>
  );
};

export default Days;
