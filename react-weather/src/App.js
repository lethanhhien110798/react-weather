import React, { Component } from 'react';
import './App.css';
import Weather from './weather.js'
import Weather2 from './weather2.js'
import Weather3 from './weather3.js'
// import Weather4 from './weather4.js'
import Box from './box.js'



class App extends Component {
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
      <div className="all">
      <div className="all2">
      <div className="weather">
        <section id="hero">
         <Weather/>
         <Weather2/>
         <Weather3/>
         <div className="weather4">
                <div className="image">
                    <a href="https://weather.com/">
                        <img src="http://streetfightmagcom.b.presscdn.com/wp-content/uploads/weather_channel.png" className="img2" /></a>
                </div>
                <div className="menu">
                <div  className="click" onClick={ this.toggleDiv }>
                    <a><i className="fa fa-align-justify"></i>
                    </a>
                    </div>
                
                </div>
            </div>
        </section>
      </div>
      </div>
      <div className="all3">
       <span className="alo">{ this.state.show && <Box/> } </span>
      </div>
      </div>

    );
  }
}

export default App;
