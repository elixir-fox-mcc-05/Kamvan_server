var jwt = require('jsonwebtoken');
require('dotenv').config()

function generateToken(obj) {
    return jwt.sign(obj, process.env.secretToken);
}

function translateToken(token) {
    return jwt.verify(token, process.env.secretToken)
}

module.exports = {
    generateToken,
    translateToken
}