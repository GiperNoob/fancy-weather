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
      weatherInfo: {}
    };
    this.Services = new Services();

    this.getImages();

    this.getGeoInfo();
  }

  getImages = () => {
    this.Services.getLinkToImage()
      .then((url) => {
        this.setState({
          src: url,
        })
      })
  }

  getGeoInfo = () => {
    this.Services.getIP()
      .then((city) => {
        return this.Services.getWeather(city.city);
      })
      .then((weatherInfo) => {
        this.setState({
          weatherInfo
        })
      })
  }

  anotherCity = (city) => {
    this.Services.getWeather(city)
      .then((weatherInfo) => {
        return this.setState({
          weatherInfo
        })
      })
      .then(() => {
        this.getImages()
      })
  }


  render() {
    return (
      <div className="backgroundContainer"
        style={{ backgroundImage: `url(${this.state.src})` }}>

        <div className="wrapper">

          <SearchBar refresh={this.getImages}
            anotherCity={this.anotherCity} />

          <Main weatherInfo={this.state.weatherInfo} />

        </div>

      </div>
    )
  }
}
