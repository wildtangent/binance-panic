# Binance Panic

In case you want to dump all your coins to TETHER (Crash under way).

## How to get set up

Create a `.env` file with your Binance API keys

```
APIKEY=YOURKEY
APISECRET=YOURSECRET
```

> DON'T EVER COMMIT IT!

### Front end app

Run the front end in one shell

```shell
npm start
```

## API

API in Another shell

```shell
node src/server/server.js
```