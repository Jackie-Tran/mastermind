import React, { Component } from 'react'

import BigCircle from './BigCircle'
import { findByLabelText } from '@testing-library/react'

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
    height: '8.33%',
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}
