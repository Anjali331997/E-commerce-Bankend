const jwt = require('jsonwebtoken');

const generateToken=(id)=>{
    const token = jwt.sign({user_id:id}, process.env.SECRET_KEY ,{expiresIn:'1d'});
    return token;
}

module.exports = {generateToken}