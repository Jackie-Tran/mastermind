import React, { Component } from 'react'

export default class BigCircle extends Component {
    render() {
        return (
            <button style={style}/>
        )
    }
}

const style = {
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'inline-block'
}
