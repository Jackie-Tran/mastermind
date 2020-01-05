import React, { Component } from 'react'

import './stylesheets/404PageStyle.css'
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className='content'>
                <h1>Page not found</h1>
                <p>Sorry but the page you requested could not be found.
                    Please go back to the homepage or post an issue on the <a id="git" href="https://github.com/Jackie-Tran/mastermind" target="_blank" rel="noopener noreferrer">github repo</a>.</p>

                <div class="button" id="button-2">
                    <div id="slide"></div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}
