'use strict';

const { Todo } = require(`../models`)
const { Op } = require("sequelize");

class TodoController {

    static create( req, res) {
        const { title, description, status, point, assignedTo } = req.body
        let newTodo = { title, description, status, point, assignedTo , UserId : req.UserId, organization : req.organization }
        Todo.create(newTodo)
            .then (result => {
                res.status(201).json({
                    Todo : result
                });
            })
            .catch ( err => {
                res.status(500).json({
                    Error : err.message
                });
            })
    }

    static getTodos ( req, res) {
        Todo.findAll({
            where : {
                UserId : req.UserId
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static getTodosByStatus ( req, res) {
        Todo.findAll({
            where : {
                status : req.params.status,
                organization : req.organization
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static getOneTodo ( req, res) {
        Todo.findOne({
            where : {
                id : Number(req.params.id),
                UserId : req.UserId
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static updateTodo ( req, res) {
        const { title, description, point, assignedTo} = req.body
        Todo.update({
            title,
            description,
            point,
            assignedTo
        }, {
            where : {
                id : Number(req.params.id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                throw Error = `invalid UserId`
            }
        })
        .catch ( err => {
            res.status(501).json({
                Error : err.message
            });
        })
    }

    static  deleteTodo ( req, res) {
        Todo.destroy({
            where : {
                id : Number(req.params.id),
                UserId : req.UserId
            }
        })
        .then (result => {
            res.status(200).json({
                Todo : result
            });
        })
        .catch ( err => {
            res.status(500).json({
                Error : err
            });
        })
    }

    static setStatus ( req, res) {
        const { id, status } = req.params;
        const { title, description, point, assignedTo} = req.body
        Todo.update({
            title,
            description,
            point,
            assignedTo,
            status : status
        }, {
            where : {
                id : Number(id),
                UserId : req.UserId
            }
        })
        .then (result => {
            if(result){
                res.status(200).json({
                    result
                });
            } else {
                res.status(401).json({
                    message : `invalid request`
                })
            }
        })
        .catch ( err => {
            res.status(500).json({
                err : err.message
            });
        })
    }

}
module.exports = TodoController;