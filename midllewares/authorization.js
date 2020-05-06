"use strict";
const {Task} = require('../models');

function Authorization(req, res, next){
    const UserId = req.currentUser;
    const id = req.params;
    Task
        .findByPk(id)
        .then(task => {
            if(task) {
                next();
            } else {
                return res.status(400).json({
                    code : 401,
                    type : "Unauthorized",
                    msg : "You are not allowed to do this"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                code : 500,
                type : "Internal Server Error",
                msg : "Something Went Wrong"
            });
        });
}

module.exports = Authorization;