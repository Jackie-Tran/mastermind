import React, { Component } from 'react'

import './404PageStyle.css'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className='content'>
                <h1>Page not found</h1>
                <p>Sorry but the page you requested could not be found. 
                    Please go back to the homepage or post an issue on the github repo.</p>
            </div>
        )
    }
}
