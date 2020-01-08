import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ColorCircle from '../components/ColorCircle'
import Row from '../components/Row'

import './GamePageStyle.css'

export default class GamePage extends Component {
    render() {
        return (
            <div>
                <h1>m a s t e r m i n d</h1>
                <Link to="/">Home</Link>
                <div id='board'>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </div>
            </div>
        )
    }
}
