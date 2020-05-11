"use strict";
const {Task} = require('../models');

function Authorization(req, res, next){
    const UserId = req.currentUser;
    const {id} = req.params;
    Task
        .findByPk(id)
        .then(task => {
            if(task.UserId === UserId) {
                next();
            } else {
                return next({
                    code : 401,
                    type : "Unauthorized",
                    msg : "You are not allowed to do this"
                });
            }
        })
        .catch(err => {
            res.next(err);
        });
}

module.exports = Authorization;