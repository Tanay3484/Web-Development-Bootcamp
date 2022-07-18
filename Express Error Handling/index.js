const express = require('express');
const morgan = require('morgan');
const AppError = require('./AppError');

const app = express();

const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password==='helloworld'){
        next();
    }
    // res.send("SORRY YOU NEED A PASSWORD");
    //throw new Error('Password required!')
    throw new AppError('Password Required',401);
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

app.get('/error',(req,res)=>{
    chicken.fly();
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF WOOF")
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send("Hello There World")
})

// app.use((req,res)=>{
//     res.status(404).send("NOT FOUND")
// });

// app.use((err,req,res,next)=>{
//     console.log("****************************************")
//     console.log("*************ERROR*****************")
//     console.log("****************************************")
//     res.status(500).send("Oh Boy , We Got an Error")
// });

app.listen(4000,()=>{
    console.log("Listening to port 4000")
});