import React, { Component } from "react";
import "./App.css";

import Quotes from "./Quotes";
import Quote from "./Quote";
import Lamp from "./Lamp";
import Working from "./Working";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open : false
    };
  }
  toggleOpenState(){
    this.setState({ open : !this.state.open})
  }
  render(){  
    const imgClass = this.state.open ? 'open' : 'close';
    return (
      <div className="App">
        <div className={`container ${imgClass}`}>
          <img className={imgClass} src="https://cdn.pixabay.com/photo/2013/11/28/11/29/soccer-ball-220205_960_720.jpg" />
          <h1 className="openClose">SIMPSONS QUOTES</h1>

        </div>
        <button
        onClick={this.toggleOpenState.bind(this)}
        
        >Click Me !</button>
        <Lamp on />
        <Lamp />
        <Quotes/>
      </div>
    );
  }
}

export default App;
