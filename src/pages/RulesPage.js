import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class RulesPage extends Component {
    render() {
        return (
            <div>
                <h1>This is the rules page</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}
