import React, { Component } from 'react';
import './Main.css';

import Title from '../title';
import Overcast from '../overcast';
import Days from '../days';
import SimpleMap from '../SimpleMap';
import ring from './ring.png';

export default class Main extends Component {
  render() {
    const {
      city, country, latitude, longitude,
      feelsLike, humidity, temp, wind,
      firstDay, secondDay, thirdDay
    } = this.props.weatherInfo;

    return (
      <main className="main">
        <div className="weather">

          <Title city={city}
            country={country} />

          <div className="weather__inform-container">
            <div className="weather__degrees">

              <span>{temp}</span>

              <img src={ring} alt="ring" className="big-ring" />

            </div>

            <Overcast
              feelsLike={feelsLike}
              humidity={humidity}
              wind={wind}
            />

          </div>

          <Days
            firstDay={firstDay}
            secondDay={secondDay}
            thirdDay={thirdDay}
          />

        </div>

        <SimpleMap latitude={latitude}
          longitude={longitude} />

      </main>
    )
  }
}
