"use strict"

const Model = require("../models/index.js");

const Task = Model.Task;
const User = Model.User;

class ControllerTask{
    static showTask(req, res, next){
        let UserOrganization = req.currentUserOrganization;
        let options = {
            include: [
                {
                    model: User,
					where: {
                        organization: UserOrganization
					},
					attributes: {
                        exclude: [ 'password', 'createdAt', 'updatedAt' ]
					}
				}
			],
			order: [["id","asc"]]
		};
		
        Task
            .findAll(options)
            .then(tasks => {
                res.status(200).json({tasks});
            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: 'the function is not working'}]
                });
            })
    }
    static addTask(req, res, next){
        const {title, description, category} = req.body;
        const UserId = req.currentUserId
        
        Task
            .create({
                title,
                description,
                category,
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
            category: req.body.category
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