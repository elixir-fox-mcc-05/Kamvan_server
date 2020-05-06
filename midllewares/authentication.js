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
                    return res.status(400).json({
                        code :400,
                        type : "Bad Request",
                        msg : "User Not Found"
                    });
                }
            });

    } catch (err) {
        return res.status(500).json({
            code: 500,
            type: "Internal Server Error",
            msg : "Something Went Wrong"
        });
    }
}

module.exports = Authentication;