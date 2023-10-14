const express = require ('express')
const mongoose =require('mongoose')
const app=express()
var cors=require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/Shopping')
app.use(express.json())

app.use(cors())


app.get ('/',(req,res)=> {
    res.send('Hello World')
})

 app.use('/api/auth',require('./routes/auth'))
app.listen(3001,()=>{
    console.log("Connected")
})