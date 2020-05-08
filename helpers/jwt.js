const jwt = require('jsonwebtoken')

function generate_token(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function verify(token) {
    return jwt.verify(token, process.env.SECRET)
}

function decode_data(token) {
    return new Promise((resolve, reject) => {
        resolve(jwt.decode(token))
    })
}

module.exports = { generate_token, verify, decode_data }