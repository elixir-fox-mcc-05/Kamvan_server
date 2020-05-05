const bcryptjs = require('bcryptjs')

function generatePassword(password){
    var salt = bcrypt.genSaltSync(15);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparePassword(password, hash){
    return bcrypt.compareSync(password, hash);
}

module.exports = {generatePassword, comparePassword}