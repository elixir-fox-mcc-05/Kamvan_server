const {Task, User} = require('../models')

class TaskController {
    static findAll(req, res){
        const UserId = req.UserId

        Task.findAll({
            where : {
                UserId
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static create(req, res) {
        const { title, description, point, assignedTo, StatId} = req.body;
        const id = req.params.id;

        Task.create({
            title,
            description,
            point,
            assignedTo,
            StatId,
            UserId: req.UserId
        })
            .then(data => {
                res.status(201).json(data)
            } )
            .catch(err => {
                next(err)
            })
    }

    static update(req, res) {
        const {title, description, point, assignedTo, StatId} = req.body;
        const id = req.params.id;
        
        Task.update({
            title,
            description,
            point,
            assignedTo,
            StatId
        }, {
            where: {
                id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static delete (req, res, next) {
        let {id} = req.params;

        Task.destroy({
                where : {
                    id
                    }
                })
            .then(data => {
                res.status(200).json({ msg : `Task ${id} successfully deleted!` })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskController;