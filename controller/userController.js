const { userModel } = require('../models/userModel');


const createUser = async (req, res) => {
    const { firstname, lastname, email, mobile, password } = req.body;

    //To check if the user already exist
    const find_user = await userModel.findOne( {email,password} );

    if (find_user) {
        //user already exist
        res.send({
            message: "user already exist",
            success: false
        })
    } 
    else{

        //user do not exist create the new user
        const new_user = new userModel({
            firstname, lastname, email, mobile, password
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
    }

}

module.exports = { createUser }