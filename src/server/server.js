const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const request = require('request');

const config = require('../config');
const BinanceClient = require('../BinanceClient');
const binance = new BinanceClient(config.binance);

const app = express();
app.use(cors(config.cors));

const API_VERSION = 'v1';
const API_BASE = '/api/';

function apiUrl(path) {
  return `${API_BASE}${API_VERSION}${path}`;
}

// Get all balances for your account
app.get(apiUrl('/binance/balances'), (req, res) => {
  binance.api.balance((error, balances) => {
    res.json(balances);
  });
});

// Convert all held coins to USDT
app.get(apiUrl('/binance/tether'), (req, res) => {
  let results = [];

  binance.api.balance((error, balances) => {
    balances.forEach((item) => {
      if (item.available > 0) {

        // TODO: Check trading pair to USDT, if not, trade to BTC then to USDT after
        let tradingPair = `${item}USDT`;
        binance.api.marketSell(tradingPair, 0.00001, undefined, (error, response) => {
          results.push(`${tradingPair} COMPLETE`);
        });
      }
    });
  });

  res.json({
    results: results.join(',')
  });
});

// Get Binance available markets
app.get(apiUrl('/markets'), (req, res) => {
  request(config.api.markets, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json.Binance);
  });
});


// Start the app
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});