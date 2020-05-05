let { Task, User } = require('../models/index')

class TasksController {
    static findAll (req, res, next) {
        Task.findAll({
            include: [{
                model: User,
                as: 'AssignorDetail',
                attributes: ['id', 'name', 'email']
            }, {
                model: User,
                as: 'AssigneeDetail',
                attributes: ['id', 'name', 'email']
            }],
            order: [['priority', 'DESC']],
        })
            .then(data => {
                res.status(200).json({
                    Tasks: data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static createTask (req, res, next) {
        let { title, description, category, priority, deadline, AssigneeId } = req.body
        let AssignorId = req.currentUserId
        Task.create({
            title,
            description,
            category,
            priority,
            deadline,
            AssignorId,
            AssigneeId,
        })
            .then(data => {
                console.log(data)
                res.status(201).json({
                    Task: data,
                    notif: 'Task successfully created!'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById (req, res, next) {
        let { id } = req.params
        Task.findByPk(id, {
            include: [{
                model: User,
                as: 'AssignorDetail',
                attributes: ['id', 'name', 'email']
            }, {
                model: User,
                as: 'AssigneeDetail',
                attributes: ['id', 'name', 'email']
            }]
        })
            .then(data => {
                if(data) {
                    res.status(200).json({
                        Task: data
                    })
                } else {
                    throw {
                        msg: "Task not found",
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTask (req, res, next) {
        let { id } = req.params
        let {title, description, category, priority, deadline, AssigneeId} = req.body
        let AssignorId = req.currentUserId
        Task.update({
            title,
            description,
            category,
            priority,
            deadline,
            AssignorId,
            AssigneeId
        }, {
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({
                    notif: `Task successfully updated`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTask (req, res, next) {
        let { id } = req.params
        Task.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.status(200).json({
                    notif: `Task successfully deleted`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static changeStatus(req, res, next) {
        let { id } = req.params
        Task.findByPk(id)
            .then(task => {
                let status = task.status ? false : true
                return Task.update({
                    status
                }, {
                    where: {
                        id
                    }
                })
            })
            .then(() => {
                res.status(200).json({
                    notif: `Status of Task successfully changed!`
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TasksController