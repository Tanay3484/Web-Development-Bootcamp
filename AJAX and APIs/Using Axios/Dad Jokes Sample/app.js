// const getDadJokes = async () => {
//     const config = {headers: {Accpet: 'application/json'}};
//     const res = axios.get('https://api.cryptonator.com/api/ticker/btc-usd',config)
//     const p = document.createElement("p");
//     p.innerHTML = res.data.joke;
//     document.body.style.display = "flex";
//     document.body.style.alignItems = "center";
//     document.body.style.justifyContent = "center";
//     document.body.style.fontFamily = "'Noto Sans Mono', monospace";
//     document.body.style.margin = "200px";
//     document.body.style.padding = "100px";
// }

// getDadJokes();
const jokes = document.querySelector("#jokes");
const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch(e){
        return "NO JOKES AVAILABLE atm :("
    }

}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("li");
    newLI.append(jokeText);
    newLI.style.margin = "10px 0px";
    jokes.append(newLI);
}

const button = document.querySelector("#btn1");
button.addEventListener('click', addNewJoke);