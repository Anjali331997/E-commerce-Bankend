const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'user'
    },
    cart: {
        type: Array,
        default: []
    },
    address: {
        type: isObjectId,
        ref: "Address"
    },
    wishlist: {
        type: isObjectId,
        ref: "Product"
    }
}, {
    timestamps: true
});

//Export the model
const userModel = mongoose.model('user', userSchema);
module.exports = { userModel };