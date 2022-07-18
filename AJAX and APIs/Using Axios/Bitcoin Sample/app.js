axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price);
        const p = document.createElement("p");
        p.innerHTML = "The current price of Bitcoin in USD is : $" + res.data.ticker.price;
        document.body.append(p);
        document.body.style.display = "flex";
        document.body.style.alignItems = "center";
        document.body.style.justifyContent = "center";
        document.body.style.fontFamily = "'Noto Sans Mono', monospace";
        document.body.style.margin = "200px";
        document.body.style.padding = "100px";
    })
    .catch(err => {
        console.log("ERROR", e);
    })


