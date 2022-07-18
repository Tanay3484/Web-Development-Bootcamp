const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/person', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err=>{
        console.log("Error occured : ",err)
    })

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person',personSchema);