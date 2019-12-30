import React, { Component } from 'react'

/*
  This component can only use colors in css
*/

export default class ColorCircle extends Component {

  getButtonStyle = () => {
    return {
      border: 'none',
      borderRadius: '50%',
      backgroundColor: this.props.color,
      width: '20px',
      height: '20px',
    }
  }

  render() {
    return (
      <button style={this.getButtonStyle()}></button>
    )
  }

}