fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE ...... ", res);
        return res.json();
    })
    .then(data => {
        console.log("DATA PARSED...");
        console.log(data.ticker.price);
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e);
    })