import React, { Component } from 'react'

import BigCircle from './BigCircle'

export default class Row extends Component {
    render() {
        return (
            <div style={style}>
                <BigCircle />
                <BigCircle />
                <BigCircle />
                <BigCircle />
            </div>
        )
    }
}

const style = {
    backgroundColor: 'pink',
}
