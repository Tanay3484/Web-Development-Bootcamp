const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {
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


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
});

productSchema.methods.greet = function() {
    console.log("HELLLLLLLO")
    console.log(` - from ${this.name}`);
};

const Product = mongoose.model('Product',productSchema);

// const bike = new Product({name:'Mountain Bike',price:599});
// bike.save()
//     .then(data=>{
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })


const findProduct = async() => {
    const foundProduct = await Product.findOne({name:'Mountain Bike'});
    foundProduct.greet();
}

findProduct();
