const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("E-commerce Backend")
})


app.listen(port,()=>{
    console.log("Server is listening to port ",port)
})