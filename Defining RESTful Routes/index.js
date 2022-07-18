const express = require('express');
const app = express();
const path = require('path');
const { stdout } = require('process');
const { v4: uuid} = require('uuid');
uuid();
const methodOverride = require('method-override');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

let comments = [
    {
        id : uuid(),
        username : 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id : uuid(),
        username : 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id : uuid(),
        username : 'Sk8erBoi',
        comment : 'Plz delete your account @Todd' 
    },
    {
        id : uuid(),
        username : 'onlysaywoof',
        comment : 'woof woof woof'
    }
];

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res) => {
    res.render('comments/new');
})

app.post('/comments',(req,res) => {
    const {username,comment} = req.body;
    comments.push({username,comment,id:uuid()});
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show',{comment});
})

app.get("/comments/:id/edit",(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit',{comment})
})

app.patch('/comments/:id',(req,res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')

})

app.delete('/comments/:id',(req,res) => {
    const {id} = req.params;
    //const foundComment = comments.find(c => c.id === id);
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(8080,()=>{
    console.log("Listening to port 8080")
});