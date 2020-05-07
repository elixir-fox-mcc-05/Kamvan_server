const { Task } = require('../models')

class TaskController{
    static create(req, res, next){
        const newTask = {
            title: req.body.title,
            assignedTo: req.body.assignedTo,
            organization: req.currentOrganization,
            UserId: req.currentUserId,
        }
        Task.create(newTask)
        .then(result => {
            return res.status(201).json({
                msg: "New Task Successfully created",
                task: {
                    id: result.id,
                    title : result.title,
                    category: result.category,
                    assignedTo: result.assignedTo,
                    UserId: result.UserId,
                    organization: result.organization
                }
            })
        })
        .catch(err => {
            return next(err)
        }) 
    }

    static findAll(req, res, next){
        let organization = req.currentOrganization
        Task.findAll({
            where: {
                organization
            },
            order: [['id', 'DESC']]
        })
        .then(result => {
            return res.status(200).json({
                task: result
            })
        })
        .catch(err => {
            return next(err)
        })
        
    }

    static increaseCategory(req, res, next){
        let id = req.params.id
        Task.findByPk(id)
        .then(task => {
            if(task){
                let newCategory = ''
                if(task.dataValues.category == "backlog"){
                    newCategory = "todo"
                }
                else if(task.dataValues.category == "todo"){
                    newCategory = "doing"
                }
                else if(task.dataValues.category == "doing"){
                    newCategory = "done"
                }
                else {
                    newCategory = "done"
                }
                let updateTask = {
                    category: newCategory
                }
                return Task.update(updateTask, {
                    where: {
                        id
                    },
                    returning: true
                })
                
            }
            else {
                return next({
                    name: 'Not Found',
                    errors: [{message: "Task not found"}]
                })
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "Your task successfully updated",
                task: result[1]
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static decreaseCategory(req, res, next){
        let id = req.params.id
        Task.findByPk(id)
        .then(task => {
            if(task){
                let newCategory = ''
                if(task.dataValues.category == "done"){
                    newCategory = "doing"
                }
                else if(task.dataValues.category == "doing"){
                    newCategory = "todo"
                }
                else if(task.dataValues.category == "todo"){
                    newCategory = "backlog"
                }
                else {
                    newCategory = "backlog"
                }
                let updateTask = {
                    category: newCategory
                }
                return Task.update(updateTask, {
                    where: {
                        id
                    },
                    returning: true
                })
                
            }
            else {
                return next({
                    name: 'Not Found',
                    errors: [{message: "Task not found"}]
                })
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "Your task successfully updated",
                task: result[1]
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static delete(req, res, next){
        Task.destroy({
            where: {
                id: req.params.id, 
            }
        })
        .then(result => {
            return res.status(200).json({
                msg: "Successfully deleted task",
            })
        })
        .catch(err => {
            return next(err)
        }) 
    }
}

module.exports = TaskController