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
    };
    this.Services = new Services();
    this.getImages = this.getImages.bind(this);
    this.getImages();
  }

  getImages() {
    this.Services.getLinkToImage()
      .then((url) => {
        this.setState({
          src: url,
        })
      })
  }

  render() {
    return (
      <div className="backgroundContainer"
        style={{ backgroundImage: `url(${this.state.src})` }}>
        <div className="wrapper">

          <SearchBar refresh={this.getImages} />

          <Main />

        </div>

      </div>
    )
  }
}
