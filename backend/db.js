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
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = connectToMongo;