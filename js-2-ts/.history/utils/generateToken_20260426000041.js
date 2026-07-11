const jwt = require("jsonwebtoken");

module.exports = function generateToken(user){
    return jwt.sign({email , user})
}