"use strict"

const Model = require("../models/index.js");

const Task = Model.Task;

class ControllerTask{
    static showTask(req, res, next){
        const UserId = req.currentUserId;
        
        Task
            .findAll({
                where: {
                    UserId
                }
            })
            .then(tasks => {
                res.status(200).json({tasks});
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static addTask(req, res, next){
        const {title, description, status} = req.body;
        const UserId = req.currentUserId
        
        Task
            .create({
                title,
                description,
                status,
                UserId
            })
            .then(result => {
                res.status(201).json({
                    task: result
                });
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static findTask(req, res, next){
        const {id} = req.params;
        
        Task
            .findOne({
                where: {
                id
                }
            })
            .then(task => {
                res.status(200).json({task});
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static deleteTask(req, res, next){
        const {id} = req.params;

        Task
            .destroy({
                where: {
                id
                }
            })
            .then(task => {
                res.status(200).json({
                    msg: "task deleted",
                    task
                });
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
    static updateTask(req, res, next){
        const {id} = req.params;
        const updatedTask = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        }
        Task
            .update(updatedTask,
            {
                where: {
                id
                },
                returning: true
            })
            .then(result => {
                res.status(201).json({
                    msg: "task updated",
                    task: result
                });
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
    }
}

module.exports = ControllerTask;