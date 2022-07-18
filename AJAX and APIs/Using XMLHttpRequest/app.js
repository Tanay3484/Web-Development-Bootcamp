const request = new XMLHttpRequest();
const p = document.querySelector('p');
request.onload =  function(){
    console.log("Request handeled successfuly");
    const data = JSON.parse(this.responseText);
    p.innerHTML = "The current price of BITCOIN in USD is : $"+data.ticker.price
}

request.onerror = function(){
    console.log("ERROR!");
    console.log(this);
}

request.open("GET",'https://api.cryptonator.com/api/ticker/btc-usd');
request.send();