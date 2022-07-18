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

const userSchema = new Schema({
    username:String,
    age:Number
})

const tweetSchema = new Schema({
    text:String,
    likes:Number,
    user:{type:Schema.Types.ObjectId,ref:'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

const makeTweets  = async() => {
    const user = new User({username:'Chickenfan99',age:19});
    const tweet1 = new Tweet({text:'I love chickens',likes:0});
    tweet1.user = user;
    await user.save();
    await tweet1.save();
    mongoose.connection.close();
}

makeTweets();
