const { Task } = require('../models/index.js');

class TaskController {
    // router.post('/', TaskController.createTask);
    static createTask (req, res, next){
        let { title, description } = req.body;
        let input = {
            title,
            description,
            UserId:Number(req.currentUserId),
            UserEmail:req.currentUserEmail,
            UserOrganization:req.currentUserOrganization
        }
        Task.create(input)
            .then(data => {
                return res.status(201).json({task: data});
            })
            .catch(err => {
                return next(err);
            })
    }

    // router.get('/', TaskController.readAllTask);
    static readAllTask (req, res, next){
        let UserOrganization = req.currentUserOrganization;
        let options = {
            order: [[`updatedAt`, 'DESC']],
            where: {
                UserOrganization
            }
        }
        Task.findAll(options)
            .then(data => {
                return res.status(200).json({tasks: data});
            })
            .catch(err => {
                return next(err);
            })
    }

    // router.get('/:taskId', authorization, TaskController.searchTask);
    static searchTask(req, res, next){
        let { taskId } = req.params;
        let options = {
            where: {
                id:Number(taskId)
            }
        }
        Task.findOne(options)
            .then(data => {
                return res.status(200).json({task: data})
            })
            .catch(err => {
                return next(err)
            })
    }

    // router.put('/:taskId', TaskController. updateTask);
    static updateTask (req, res, next){
        let { taskId } = req.params;
        let options = {
            where: {
                id: Number(taskId)
            },
            returning: true
        }
        let { title, description, category } = req.body;
        let input = {
            title,
            description,
            category
        }
        Task.update(input, options)
            .then (data => {
                return res.status(200).json({task: data[1][0]});
            })
            .catch(err => {
                return next(err);
            })
    }

    // router.delete('/:taskId', TaskController.deleteTask);
    static deleteTask (req, res, next){
        let { taskId } = req.params;
        let options = {
            where: {
                id: Number(taskId)
            },
            returning: true
        }
        Task.destroy(options)
            .then(_ => {
                return res.status(200).json({message: `task ${taskId} deleted`})
            })
            .catch(err => {
                return next(err);
            })
    }
}

module.exports = TaskController;