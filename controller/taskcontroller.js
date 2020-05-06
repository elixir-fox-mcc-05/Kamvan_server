"use strict";
const {Task} = require('../models');

class TaskController {
    static findAll(req, res, next){
        const {category} = req.params;
        Task
            .findAll()
            .then(task => {
                if(task){
                    res.status(200).json({
                        Task : task
                    });
                } else {
                    return res.status(404).json({
                        code : 404,
                        type : "Not Found",
                        msg : "Data not found"
                    });
                }
            })
            .catch(err => {
                return res.status(500).json({
                    code : 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
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
                    return res.status(404).json({
                        code : 404,
                        type : "Not Found",
                        msg : "Data Not Found"
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
                    return res.status(501).json({
                        code : 501,
                        type : "Not Implemented",
                        msg : "Cannot Create Task"
                    });
                }
            })
            .catch(err => {
                return res.status(500).json({
                    code : 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
            });
    }
    static edit(req, res, next){
        const {id} = req.params;
        const {title, descriptions, point, assigned, category} = req.body;
        const value = {
            title,
            descriptions,
            point,
            assigned,
            category
        };
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
                    return res.status(304).json({
                        code : 304,
                        type : "Not Modified",
                        msg : "Cannot edit data"
                    });
                }
            })
            .catch(err=>{
                return res.status(500).json({
                    code : 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
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
            .then(tasl => {
                res.status(200).json({
                    msg : `Completely destroy data with id ${id}`
                });
            })
            .catch(err => {
                return res.status(500).json({
                    code : 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
            });
    }
}

module.exports = TaskController;