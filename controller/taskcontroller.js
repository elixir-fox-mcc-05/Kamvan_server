"use strict";
const {Task} = require('../models');
const {Category} = require("../models");

class TaskController {
    static findAll(req, res, next){
        Category
            .findAll({include : Task})
            .then(result => {
                if(result){
                    res.status(200).json({
                        Category : result
                    });
                } else {
                    return next({
                        code : 404,
                        type : "Not Found",
                        msg : "Data not found"
                    });
                }
            })
            .catch(err => {
                return next(err);
            });
    }
    static findOne(req, res, next){
        const id = req.params.id;
        Task
            .findByPk({
                where : {
                    id
                }
            })
            .then(task => {
                if(task){
                    res.status(200).json({
                        Task : task
                    });
                } else {
                    return next({
                        code : 404,
                        type : "Not Found",
                        msg : "Data Not Found"
                    });
                }
            })
            .catch(err => {
                return next(err);
            });
    }
    static create(req, res, next){
        const UserId = req.currentUser;
        const {title, descriptions, point, assigned} = req.body;
        const value = {
            title,
            descriptions,
            point,
            assigned,
            UserId
        };
        Task
            .create(value)
            .then(task => {
                if(task){
                    res.status(201).json({
                        Task : task
                    });
                } else {
                    return next({
                        code : 501,
                        type : "Not Implemented",
                        msg : "Cannot Create Task"
                    });
                }
            })
            .catch(err => {
                return next(err);
            });
    }
    static edit(req, res, next){
        const {id} = req.params;
        const {title, descriptions, point, assigned, CategoryId} = req.body;
        let value;
        if(!CategoryId){
            value = {
                title,
                descriptions,
                point,
                assigned,
            };
        } else {
            value = {
                CategoryId
            };
        }
        Task
            .update(value, {
                where : {
                    id,
                }
            })
            .then(task => {
                if(task){
                    res.status(202).json({
                        Task : task
                    });
                } else {
                    return next({
                        code : 304,
                        type : "Not Modified",
                        msg : "Cannot edit data"
                    });
                }
            })
            .catch(err=>{
                return next(err);
            });
    }
    static delete(req, res, next){
        const {id} =  req.params;
        Task
            .destroy({
                where : {
                    id
                }
            })
            .then(task => {
                res.status(200).json({
                    msg : `Completely destroy data with id ${id}`
                });
            })
            .catch(err => {
                return next(err);
            });
    }
}

module.exports = TaskController;