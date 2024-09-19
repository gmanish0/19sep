const mongoose = require('mongoose');
// Steps to connect to MongoDB
async function connection() {
    try{
        let connection = await mongoose.connect(
            'mongodb://localhost:27017/Home'
        );
        console.log("Connected to Mongo DB.....");
    }catch(err){
        console.log(err);
    }
    
}
module.exports = connection;