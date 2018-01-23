const binance = require('node-binance-api');

class BinanceClient {
  constructor(config) {
    binance.options(config);
    this.api = binance;
  }
}

module.exports = BinanceClient;