const { userModel } = require('../models/userModel')
const jwt = require("jsonwebtoken");
const asyncHanlder = require('express-async-handler');
require('dotenv').config();

const authMiddleware = asyncHanlder(async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    if (token) {
        //decode and check
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                throw new Error("Not Authorised! Please login again")
            }
            else {
                console.log(decoded);
                const user_id = decoded.user_id
                req.user_id = user_id
                next()
            }
        });
    }
    else {
        throw new Error("Please login to access")
    }

})

const isAdmin = asyncHanlder(async (req, res, next) => {
    // console.log(req.user);
    const {user_id} = req.user_id;
    const adminUser = await userModel.findById(user_id );
    console.log(adminUser)
    if (adminUser.role !== "admin") {
        throw new Error("You are not an admin");
    }
    else {
        next();
    }
})


module.exports = { authMiddleware, isAdmin }