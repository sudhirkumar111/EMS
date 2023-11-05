const mongoose = require('mongoose')
const connectDB =async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/alistedb")
        console.log("connection completed")
    }
    catch(error){
        console.log(" error occured in data base connection")
    }
}
module.exports =  connectDB

