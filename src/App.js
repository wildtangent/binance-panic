import React, { Component } from 'react';
import logo from './components/bitcoin.png';
import './App.css';
import BinancePanicButton from './components/BinancePanicButton';
import Config from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Don't panic, HODL</h1>
        </header>
        <p className="App-intro">
          <BinancePanicButton config={Config.binance} />
        </p>
      </div>
    );
  }
}

export default App;
