import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        style={this.props.style}
        onClick={this.props.onClick}
        type="submit"
      >{
          this.props.value
        }
      </button>
    );
  }
}
