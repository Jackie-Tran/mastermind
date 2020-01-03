import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import circles from '../images/menuColors.png'

export default class MenuPage extends Component {
    render() {
        return (
            <div style={pageStyle}>
                <div style={titleStyle}>
                    <h1 style={title}>m a s t e r m i n d</h1>
                    <img src={circles} style={imgStyle} />
                    <div style={creditStyle}>
                        <h4>Game Remade By</h4>
                        <h5>Jackie Tran | Derek Khau | Michael Lam</h5>
                    </div>
                </div>

                <div className='menuButtons'>
                    <Link to="/instruction">Instruction Page</Link>
                    <br />
                    <Link to="/game">Game Page</Link>
                </div>
            </div>
        )
    }
}

const pageStyle = {
    textAlign: 'center',
    backgroundColor: '#3b5295',
    minHeight: '100vh'
}

const titleStyle = {
    color: '#d5d6da',
    textAlign: 'center',
    position: 'absolute',
    height: '200px',
    width: '400px',
    margin: '-100px 0 0 -200px',
    top: '50%',
    left: '50%',
}

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto', 
    width: '85%'
}

const creditStyle = {
    textAlign: 'right'
}

const title = {
    fontSize: '300%'
}
