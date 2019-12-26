import React, { Component } from 'react'

export default class ColourCircle extends Component {

  state = {
    colour: 'colourName'
  }

  render() {
    return (
      <button style={style}></button>
    )
  }

}

const style = {
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'green',
  width: '20px',
  height: '20px',
}
