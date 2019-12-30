import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuPage extends Component {
    render() {
        return (
            <div>
                <h1>This is the menu page</h1>
                <Link to="/instruction">Instruction Page</Link>
                <br/>
                <Link to="/game">Game Page</Link>
            </div>
        )
    }
}
