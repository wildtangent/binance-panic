import React, { Component } from 'react';
import request from 'request';
import config from '../config';

import './BinancePanicButton.css';

class BinancePanicButton extends Component {

  constructor(props) {
    super(props);

    console.log(config);

    this.state = {
      btc: this.getBtcBalance(),
      usdt: this.getUsdtBalance(),
      panicResult: null
    };
  }

  getBtcBalance() {
    request(config.api.balances, (error, response, body) => {
      let json = JSON.parse(body);
      let btc = json.BTC.available;

      this.setState((prevState, props) => {
        return {
          btc: btc
        }
      })
    })
  }

  getUsdtBalance() {
    request(config.api.balances, (error, response, body) => {
      let json = JSON.parse(body);
      let usdt = json.USDT.available;

      this.setState((prevState, props) => {
        return {
          usdt: usdt
        }
      })
    })
  }

  updateBalances() {
    this.getBtcBalance();
    this.getUsdtBalance();
  }

  panicSell() {
    console.log("PANICCCCCC!!!!!");
    request
      .get(config.api.tether, (error, response, body) => {
        let json = JSON.parse(body);
        let result = json.result;

        this.setState((prevState, props) => {
          return {
            panicResult: result
          }
        });

        this.updateBalances();
      });
  }

  render() {
    let result;
    if(this.state.panicResult) {
      result = <p>Result: {this.state.panicResult}</p>
    }

    return (
      <div>
        <button
          onClick={this.panicSell.bind(this)}
          className="binance-panic--button"
        >
          PANIC SELL TO USDT
        </button>
        <p>BTC: {this.state.btc}</p>
        <p>USDT: {this.state.usdt}</p>
        {result}
      </div>
    );
  }
}

export default BinancePanicButton;