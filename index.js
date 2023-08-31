const express = require('express');
const mongoose = require('mongoose')
const {authRouter} = require('./routes/authRoute')
require('dotenv').config();
const {userModel} = require('./models/userModel');
const { dbconnection } = require('./config/dbConnect');


const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.text());


app.get('/',(req,res)=>{
    res.send("E-commerce Backend")
})


app.use("/users/",authRouter)

app.listen(port,async()=>{
    console.log("Server is listening to port ",port)
    await dbconnection();
})