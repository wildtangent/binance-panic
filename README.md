# Binance Panic

In case you want to dump all your coins to TETHER (Crash under way).

*Now don't be fucking stupid.*

* The API and front end are unprotected.
* Don't deploy this shit or put it anywhere unsafe.
* With your API Key and secret someone can do anything to your Binance account, without authenticating or 2FA


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