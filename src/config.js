const config = {
  binance: {
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET,
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    test: true // If you want to use sandbox mode where orders are simulated
  },
  api: {
    balances: 'http://localhost:5000/api/v1/binance/balances',
    tether: 'http://localhost:5000/api/v1/binance/tether'
  },
  cors: {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
};

module.exports = config;