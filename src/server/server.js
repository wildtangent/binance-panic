const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const config = require('../config');
const BinanceClient = require('../BinanceClient');
const binance = new BinanceClient(config.binance);

const app = express();
app.use(cors(config.cors));

app.get('/api/v1', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/binance/balances', (req, res) => {
  binance.api.balance((error, balances) => {
    res.json(balances);
  });
});

app.get('/api/v1/binance/tether', (req, res) => {
  binance.api.balance((error, balances) => {
    let btcAvailable = balances.BTC.available;
    let result = null;
    if (btcAvailable > 0) {
      binance.api.marketSell('BTCUSDT', 0.00001, undefined, (error, response) => {
        res.json({
          result: 'COMPLETE'
        });
      });
    } else {
      res.json({
        result: result
      });
    }
  });
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});