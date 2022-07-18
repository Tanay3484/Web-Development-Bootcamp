const express = require("express");
const app = express();

// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST");
//     //res.send("HELLO, WE GOT YOUR REQUEST! THIS IS THE RESPONSE")
//     res.send("<div style='display: flex;justify-content: center;align-items: center;background-color: aquamarine;'><h1>This is the header</h1></div>");
// })

app.get('/',(req,res)=>{
    res.send("This is the HOMEPAGE!!");
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`<div style='display: flex;justify-content: center;align-items: center;background-color: aquamarine;'><h1>Browsing the ${subreddit} subreddit</h1></div>`);
})

app.get('/cats',(req,res)=>{
    res.send("MEOW!!!")
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF!!");
})


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})