const { Task } = require('../models/index.js');

class TaskController {
    // router.post('/', TaskController.createTask);
    static createTask (req, res, next){
        res.status(201).json({
            message: `masuk create`
        })
    }

    // router.get('/', TaskController.readAllTask);
    static readAllTask (req, res, next){
        res.status(200).json({
            message: `masuk read all`
        })
    }

    // router.put('/:taskId', TaskController. updateTask);
    static updateTask (req, res, next){
        res.status(200).json({
            message: `masuk update`
        })
    }

    // router.delete('/:taskId', TaskController.deleteTask);
    static deleteTask (req, res, next){
        res.status(200).json({
            message: `masuk delete`
        })
    }
}

module.exports = TaskController;