'use strict'

const { User, Todo } = require(`../models`)
const { translateToken } = require(`../helpers/jwt`)


function authenticate( req, res, next) {

    if(req.headers.token) {
        const { UserId } = translateToken(req.headers.token);
        User.findByPk(UserId)
        .then(result => {
                if(result){
                    req.UserId = UserId;
                    next ();
                } else {
                    res.status(400).json({
                        message : `Invalid token supplied or user no longer exists`
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    } else {
        res.status(401).json({
            message : `not logged in`
        })
    }
}

function authorize ( req, res, next) {
    Todo.findOne({
        where : {
            id : Number(req.params.id),
            UserId : req.UserId
        }
    })
        .then( result => {
            if(result){
                next()
            } else {
                res.status(401).json({
                    message : `item not found, or it does not belong to you`
                })
            }
        })
        .catch( err => {
            res.status(500).json({
                Error : err.message
            })
        })
}

module.exports =  {
    authenticate,
    authorize
}