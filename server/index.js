const express = require('express')
const connectDB = require('./connection/db.js')
const Site = require('./model/site.js')
const Electrician = require('./model/electrician.js')
const cors = require('cors')




connectDB();
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/get-data',async (req,res)=>{
    console.log(">>>>>>>>>>>>>>>>")
    const result = await Site.find();
    res.send(result)
})


app.patch('/update-appointment',async (req,res)=>{
    console.log(">>>>>>>>>>>>>>>>",req.params)
   
})


app.listen(4000,(err)=>{
        if(err){
            console.log(err)
         }
         console.log('server listening')
})