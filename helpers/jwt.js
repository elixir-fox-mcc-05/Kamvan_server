var jwt = require('jsonwebtoken');

function genToken( payload ) {
    var token = jwt.sign(payload, 'secret');
    return token
}

function decodedToken (token) {
    var decoded = jwt.verify(token, 'secret');
    return decoded
}


module.exports = { 
    genToken,
    decodedToken
}