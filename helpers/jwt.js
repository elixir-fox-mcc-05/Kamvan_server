const jwt = require('jsonwebtoken')

function generateToken (data){
    console.log(data)
    return jwt.sign(data,process.env.SECRET)
}

function verifyToken (data){
    return jwt.verify(data,process.env.SECRET)
}

module.exports = {generateToken, verifyToken}