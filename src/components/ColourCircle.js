import React, { Component } from 'react'

export default class ColourCircle extends Component {

  getButtonStyle = () => {
    
    console.log("'" + this.props.colour + "'");
    return {
      border: 'none',
      borderRadius: '50%',
      backgroundColor: this.props.colour,
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