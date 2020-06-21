import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import Main from '../Main';
import Services from '../../services/Services';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      city: '',
      country: '',
      latitude: '',
      longitude: '',
      feelsLike: '',
      humidity: '',
      temp: '',
      wind: '',
      firstDay: '',
      secondDay: '',
      thirdDay: '',
    };
    this.Services = new Services();

    this.getImages = this.getImages.bind(this);
    this.getImages();

    this.getGeoInfo = this.getGeoInfo.bind(this);
    this.getGeoInfo();
  }

  getImages() {
    this.Services.getLinkToImage()
      .then((url) => {
        this.setState({
          src: url,
        })
      })
  }

  getGeoInfo() {
    this.Services.getIP()
      .then((body) => {

        this.setState({
          city: body.city,

        })
      })
      .then(() => {
        return this.Services.getWeather(this.state.city);
      })
      .then((body) => {
        this.setState({
          city: body.city,
          country: body.country,
          latitude: body.latitude,
          longitude: body.longitude,
          feelsLike: body.feelsLike,
          humidity: body.humidity,
          temp: body.temp,
          wind: body.wind,
          firstDay: body.firstDay,
          secondDay: body.secondDay,
          thirdDay: body.thirdDay,
        })
      })
  }


  render() {
    const { city, country, latitude,
      longitude, feelsLike, humidity,
      temp, wind,
      firstDay, secondDay, thirdDay } = this.state;

    return (
      <div className="backgroundContainer"
        style={{ backgroundImage: `url(${this.state.src})` }}>

        <div className="wrapper">

          <SearchBar refresh={this.getImages} />

          <Main city={city}
            country={country}
            latitude={latitude}
            longitude={longitude}
            feelsLike={feelsLike}
            humidity={humidity}
            temp={temp}
            wind={wind}
            firstDay={firstDay}
            secondDay={secondDay}
            thirdDay={thirdDay}
          />

        </div>

      </div>
    )
  }
}
