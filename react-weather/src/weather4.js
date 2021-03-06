import React, { Component } from 'react';
import './App.css';
import Box from './box.js'


class Weather4 extends Component {
    constructor() {
        super();
        this.state = {
            show : true
        };
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show : !show })
    }
    render() {
        return (
            <div className="weather4">
                <div className="image">
                    <a><img src="http://files.softicons.com/download/system-icons/windows-8-metro-invert-icons-by-dakirby309/ico/Internet%20Shortcuts%20&%20Manufacturers/The%20Weather%20Channel.ico" className="img2" /></a>
                </div>
                <div className="menu">
                <div  className="click" onClick={ this.toggleDiv }>
                    <a><i className="fa fa-align-justify"></i>
                    <span>{ this.state.show && <Box/> } </span>
                    </a>
                    </div>
                
                </div>
            </div>
        );
    }
}


export default Weather4