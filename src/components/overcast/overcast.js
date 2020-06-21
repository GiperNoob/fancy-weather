import React from 'react';
import './overcast.css';
import Image from './cloudy.svg';

const Overcast = () => {
  return (
    <div className="overcast">

      <div>
        <img src={Image} alt="lio" className="lio" />
      </div>

      <div className="info__text">

        <span>overcast</span>
        <span>feels like: 7</span>
        <span>wind: 2 m/s</span>
        <span>humidity: 83%</span>

      </div>

    </div>
  )
};

export default Overcast;
