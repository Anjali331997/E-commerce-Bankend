const mongoose = require('mongoose');

// const connection = mongoose.connect('mongodb://localhost:27017/Ecommerce').then(() => {
//     console.log("Mongodb is successfully connected");
// }).catch(() => {
//     console.log("Error while connecting to db")
// }
// )

const dbconnection = () => {
    try {
        const connect = mongoose.connect('mongodb://localhost:27017/Ecommerce')
        console.log("Mongodb is successfully connected");
    } catch (err) {
        console.log("Error while connecting to db", err)
    }
}

module.exports = { dbconnection };