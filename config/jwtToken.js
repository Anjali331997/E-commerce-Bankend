const jwt = require('jsonwebtoken');

const generateToken=(id)=>{
    const token = jwt.sign({}, process.env.SECRET_KEY ,{expiresIn:'3d'});
    return token;
}

module.exports = {generateToken}