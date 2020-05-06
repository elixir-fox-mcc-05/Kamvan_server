const jwt = require('jsonwebtoken')

function generate_token(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function verify(token) {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = { generate_token, verify }