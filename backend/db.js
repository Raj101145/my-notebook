const mongoose = require ("mongoose");
const mongoURI = "mongodb://localhost:27017/my-notebook";
const connectToMongo = async ()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("connected to mongoose successfully");
    }
    catch (error) {
        console.error("mongoDB connection error:",error);
    }

}

module.exports = connectToMongo;