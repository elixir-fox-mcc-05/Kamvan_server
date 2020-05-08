const { User, Task } = require('../models');

class TaskController {
    static addNewTask(req, res, next) {
        const { title, description, due_date } = req.body;
        const UserId = req.userId

        Task
            .create({
                title,
                description,
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
        const organization = req.organization;

        Task
            .findAll({
                include: {
                    model: User,
                    where: {
                        organization
                    },
                    attributes: {
                        exclude:['password', 'createdAt', 'updatedAt']
                    }
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

    static changeCategory(req, res, next) {
        const { id } = req.params;
        const { category } = req.body;

        Task
            .update({
                category
            },{
                where: {
                    id
                },
                returning: true
            })
            .then(task => {
                res.status(200).json({
                    task
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteTask(req, res, next) {
        const { id } = req.params;

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
