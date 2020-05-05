const brypt = require('bcryptjs')

function encrypt (password){
    brypt.hash(password,5)
}

function decrypt (password,cryptpassword){
    brypt.compareSync(password,cryptpassword)
}

module.exports = {encrypt,decrypt}