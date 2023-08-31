const { userModel } = require('../models/userModel');
const asyncHanlder = require('express-async-handler');
const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwtToken');


//signup a user
const createUser = asyncHanlder(async (req, res) => {
    const { firstname, lastname, email, mobile, password } = req.body;

    //To check if the user already exist
    const find_user = await userModel.findOne({ email, password });

    if (find_user) {
        //user already exist
        // res.send({
        //     message: "user already exist",
        //     success: false
        // })

        throw new Error("User Already Exists")
    }
    else {

        //user do not exist create the new user

        // Store hash in your password DB.
        bcrypt.hash(password, 5, async function (err, hash) {
            const new_user = new userModel({
                firstname, lastname, email, mobile, password: hash
            });

            try {
                await new_user.save();
                res.status(400).send({ message: "successfully created new user", success: true })
            }
            catch (err) {
                console.log("Error happened while creating new user try again!");
                console.log(err);
                res.status(500).send({ message: "unable to create new user", success: false })
            }
        });


    }

})
//login a user
const loginUser = asyncHanlder(async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                const token = generateToken(user.id);
                res.send({
                    message: "Login Succesful",
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    mobile: user.mobile,
                    token: token
                })
            } else {
                throw new Error("Invalid Credentials")
            }
        });
    }
    else {
        throw new Error("Invalid credentials")
    }

})

//get all users
const getallUser = asyncHanlder(async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        throw new Error(error)
    }
})

//get single users
const getaSingleUser = asyncHanlder(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById( id );
        res.send(user);
    } catch (error) {
        throw new Error(error)
    }
})


//edit user details
const editUSer = asyncHanlder(async (req, res) => {

})

//delete user details
const deleteUSer = asyncHanlder(async (req, res) => {

})

module.exports = {
    createUser,
    loginUser,
    getallUser,
    getaSingleUser,
    editUSer,
    deleteUSer
}