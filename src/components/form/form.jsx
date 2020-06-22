import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }
  onChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.anotherCity(this.state.label);
    this.setState({
      label: '',
    });
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div>
          <input
            type="text"
            className="search-field"
            placeholder="Search city"
            value={this.state.label}
            onChange={this.onChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit">
            search
          </button>
        </div>
      </form>
    );
  }
}
