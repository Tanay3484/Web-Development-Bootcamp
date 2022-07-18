const express = require('express');
const morgan = require('morgan');

const app = express();

const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password==='helloworld'){
        next();
    }
    res.send("SORRY YOU NEED A PASSWORD");
};

app.use(morgan('tiny'))
app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method,req.path);
    next();
})

app.use('/dogs',(req,res,next)=>{
    console.log("I love Dogs");
    next();
})



app.get('/',(req,res)=>{
    res.send("HOME PAGE!")
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF WOOF")
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send("Hello There World")
})

app.use((req,res)=>{
    res.status(404).send("NOT FOUND")
});

app.listen(4000,()=>{
    console.log("Listening to port 4000")
});