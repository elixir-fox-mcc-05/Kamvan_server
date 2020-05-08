const bcryptjs = require('bcryptjs')

function generatePassword(password){
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(password, salt);
    return hash
}

function comparePassword(password, hash){
    return bcryptjs.compareSync(password, hash);
}

module.exports = {generatePassword, comparePassword}