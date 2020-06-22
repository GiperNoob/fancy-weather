import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const { city, country } = this.props;
    return (
      <div className="title">
        <div>
          <h1 className="city">
            {city}, {country}
          </h1>
        </div>

        <div>
          <span className="date">{new Date().toDateString()}</span>
          <span className="date">{this.state.date.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }
}
