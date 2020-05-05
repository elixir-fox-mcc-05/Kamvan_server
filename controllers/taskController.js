const { User, Task } = require('../models');

class TaskController {
    static addNewTask(req, res, next) {
        const { title, description, category, due_date } =req.body;
        const UserId = req.userId

        Task
            .create({
                title,
                description,
                category,
                due_date: new Date(due_date),
                UserId
            })
            .then(newTask => {
                res.status(201).json({
                    task: newTask
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getAllTask(req, res, next) {
        const UserId = req.userId;

        Task
            .findAll({
                where: {
                    UserId
                }
            })
            .then(tasks =>{
                res.status(200).json({
                    tasks
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static updateTask(req, res, next) {
        const { title, description, category, due_date } = req.body;
        const { id } =req.params;

        Task
            .update({
                title,
                description,
                category,
                due_date: new Date(due_date)
            }, {
                where: {
                    id
                },
                returning: true
            })
            .then(editedtask => {
                res.status(200).json({
                    task: editedtask
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteTask(req, res, next) {
        const { id } =req.params;

        Task
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: `Success delete task with id ${id}`
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = TaskController;
