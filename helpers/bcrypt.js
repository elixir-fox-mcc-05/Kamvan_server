'use strict'

const bcrypt  = require(`bcryptjs`)
var salt = bcrypt.genSaltSync(10);

function plainToHash (password) {
    
    return bcrypt.hashSync(password, salt);
    
}

function compare (password, hash){
    
    return bcrypt.compareSync(password, hash);

}

module.exports = {
    plainToHash,
    compare
}