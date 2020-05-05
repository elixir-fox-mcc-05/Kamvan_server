let bcrypt = require('bcryptjs');


function hashPass (password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparehash (password,hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = { 
    hashPass ,
    comparehash
}