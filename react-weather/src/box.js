import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    render(){
        return(
            <div className="box">
                <div className="box1">
                <div className="tp1">
                <p className="times">12:26</p>
                <span className="ct">Đà Nẵng</span>
                </div>
                <div className="tp2">
                <p className="nd">31<span>&#176;</span></p>
                </div>
                </div>
                <div className="box2">
                <div className="tp1">
                <p className="times">12:26</p>
                <span className="ct">Hà Nội</span>
                </div>
                <div className="tp2">
                <p className="nd">28<span>&#176;</span></p>
                </div>
                </div>
                <div className="box2">
                <div className="tp1">
                <p className="times">12:26</p>
                <span className="ct">TP. Hồ Chí Minh</span>
                </div>
                <div className="tp2">
                <p className="nd">33<span>&#176;</span></p>
                </div>
                </div>
                <p className="nd1"><span>&#176;</span>C / <span className="nd2">&#176; F</span></p>
            </div>
        );
    }
}

export default Box