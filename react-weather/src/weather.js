import React, { Component } from 'react';
import './App.css';

class Weather extends Component {
    render() {
        return (
            <div className="weather1">
                <div className="city">
                    <h1 className="city1">Đà Nẵng</h1>
                </div>
                <div className="city2">
                    <p className="weat">Trời nắng</p>
                    <div className="temp">
                        <span className="temp1">30</span>
                    </div>
                    <div className="temp2">
                        <span className="temp3">o</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Weather 