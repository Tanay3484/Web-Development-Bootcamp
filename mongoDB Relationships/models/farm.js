const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(()=>{
        console.log('Connected to Databse')
    })
    .catch(err=>{
        console.log("Error : ");
        console.log(err)
    })

const productSchema = new Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','Fall','Winter']
    }
});

const Product = mongoose.model('Product',productSchema);

// Product.insertMany([
//     {name:'Goddess Melon',price:4.99,season:'Summer'},
//     {name:'Sugar Baby Watermelon',price:4.99,season:'Summer'},
//     {name:'Asparagus',price:3.99,season:'Spring'},
    
// ])

const farmSchema = new Schema({
    name:String,
    city:String,
    products:[{type:Schema.Types.ObjectId,ref:"Product"}]
})

const Farm = mongoose.model('Farm',farmSchema);

const makeFarm = async () => {
    const farm = new Farm({name:'Full Belly Farm',city:'Guinda , CA'});
    const melon = await Product.findOne({name:"Goddess Melon"});
    farm.products.push(melon);
    const res = await farm.save();
    console.log(res);
    mongoose.connection.close();
}

//makeFarm();
const addProduct = async() =>{
    const farm = await Farm.findOne({name:'Full Belly Farm'});
    const watermelon = await Product.findOne({name:"Sugar Baby Watermelon"});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
    mongoose.connection.close();
}

Farm.findOne({name:'Full Belly Farm'})
    .populate('products')
    .then(farm=>console.log(farm))


