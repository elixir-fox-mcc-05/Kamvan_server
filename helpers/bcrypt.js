const bcrypt = require('bcryptjs')

let saltRounds = +process.env.SALT

function generateHash(password) {
    let salt = bcrypt.genSaltSync(saltRounds)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    generateHash,
    verifyPassword
}