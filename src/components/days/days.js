import React from 'react';
import './days.css';

import firstImg from './cloudy-day-1.svg';
import secondImg from './cloudy-day-2.svg';
import thirdImg from './cloudy-day-3.svg';
import ring from './ring.png';

const Days = () => {
  return (
    <div className="days">

      <div className="first">
        <span className="day">Monday</span>
        <div className="days__img-degrees">
          <span>15</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={firstImg} alt="weather-img" className="weather-img" />
        </div>
      </div>

      <div className="second">
        <span className="day">Tuesday</span>
        <div className="days__img-degrees">
          <span>14</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={secondImg} alt="weather-img" className="weather-img" />
        </div>
      </div>

      <div className="third">
        <span className="day">Wednesday</span>
        <div className="days__img-degrees">
          <span>10</span>
          <img src={ring} alt="ring" className="little-ring" />
          <img src={thirdImg} alt="weather-img" className="weather-img" />
        </div>
      </div>
    </div>
  )
};

export default Days;