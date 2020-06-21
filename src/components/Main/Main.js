import React, { Component } from 'react';
import './Main.css';

import Title from '../title';
import Overcast from '../overcast';
import Days from '../days';
import SimpleMap from '../SimpleMap';
import ring from './ring.png';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <main className="main">
        <div className="weather">

          <Title />

          <div className="weather__inform-container">
            <div className="weather__degrees">
              <span>10</span>
              <img src={ring} alt="ring" className="big-ring" />

            </div>

            <Overcast />

          </div>

          <Days />

        </div>

        <SimpleMap />

      </main>
    )
  }
}
