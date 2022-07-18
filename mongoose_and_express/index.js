const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');
const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/farmStand', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("OH NO Error!!!");
        console.log(err);
    })


const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.get('/farms',async (req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index',{farms});
})

app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id',async (req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{farm})
})

app.delete('/farms/:id',async(req,res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id)
    
    res.redirect('/farms');
})

app.post('/farms',async (req,res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

app.get('/farms/:id/products/new',async (req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{id,farm})
})

app.post('/farms/:id/products',async (req,res)=>{
    //const {id} = req.params;
    const farm = await Farm.findById(req.params.id);
    const {name,price,category} = req.body;
    const product = new Product({name,price,category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`)
})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('products/index.ejs',{products})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new.ejs')
})

app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show',{product})
})

app.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('products/edit.ejs',{product})
})

app.put('/products/:id',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
    res.redirect(`/products/${product._id}`)
})

app.delete("/products/:id",async(req,res)=>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});