import React, { Component } from 'react';
import './MenuPageStyle.css'
import { Link } from 'react-router-dom';
import circles from '../images/menuColors.png';


export default class MenuPage extends Component {
    render() {
        return (
            <div className="Page">
                <div className="Title">
                    <h1 className="TitleText">m a s t e r m i n d</h1>
                    <img className="Image" src={circles} alt='Circles' />
                    <div className="Credit">
                        <h4>Game Remade By</h4>
                        <h5>Jackie Tran | Derek Khau | Michael Lam</h5>
                    </div>
                    <div className="button" id="button-3">
                        <div id="circle"></div>
                        <Link to="/game">Play</Link>
                    </div>
                    <div className="button" id="button-3">
                        <div id="circle"></div>
                        <Link to="/rules">Rules</Link>
                    </div>
                </div>


            </div>
        )
    }
}
