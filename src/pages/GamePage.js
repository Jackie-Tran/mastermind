import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ColorCircle from '../components/ColorCircle'

export default class GamePage extends Component {
    render() {
        return (
            <div>
                <h1>This is the game page</h1>
                <Link to="/">Home</Link>
                <br/>
                <ColorCircle color='red'/>
                <ColorCircle color='orange'/>
                <ColorCircle color='yellow'/>
                <ColorCircle color='green'/>
                <ColorCircle color='blue'/>
                <ColorCircle color='indigo'/>
                <ColorCircle color='violet'/>
            </div>
        )
    }
}
