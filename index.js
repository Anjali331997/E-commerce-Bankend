const express = require('express');
const mongoose = require('mongoose')


require('dotenv').config();
const { userModel } = require('./models/userModel');
const { dbconnection } = require('./config/dbConnect');
const { authRouter } = require('./routes/authRoute')
const { notFound, errorHandler } = require('./middleware/errorHandler');
const  cookieParser = require('cookie-parser')



const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.text());
app.use(cookieParser)


app.get('/', (req, res) => {
    res.send("E-commerce Backend")
})



app.use("/users/", authRouter)

//error middlewares is always at the end
app.use(notFound);
app.use(errorHandler);

app.listen(port, async () => {
    console.log("Server is listening to port ", port)
    await dbconnection();
})