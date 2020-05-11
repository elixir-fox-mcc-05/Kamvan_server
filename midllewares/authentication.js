"use strict";
const {User} = require('../models');
const {verifyToken} = require('../helpers/jwt');

function Authentication(req, res, next){
    let {token} = req.headers;
    try {
        let decode = verifyToken(token);
        const {id} = decode;
        User
            .findByPk(id)
            .then(user => {
                if(user){
                    req.currentUser = id;
                    next();
                } else {
                    return next({
                        code :400,
                        type : "Bad Request",
                        msg : "User Not Found"
                    });
                }
            });

    } catch (err) {
        return next(err);
    }
}

module.exports = Authentication;