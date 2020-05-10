const { Task } = require('../models')

class Controller {
    static findAll(req, res, next) {
        Task
            .findAll()
            .then(result => {
                res.status(200).json({ result })
            })
            .catch(err => {
                res.status(500).json({ msg: err.message })
            })
    }

    static createTask(req, res, next) {
        Task
            .create({
                title: req.body.title,
                description: req.body.description,
                point: req.body.point,
                assignedto: req.body.assignedto,
                category: req.body.category,
                UserId: req.UserId
            })
            .then(result => res.status(201).json({ result }))
            .catch(err => res.status(500).json({ msg: err.message }))
    }

    static destroy(req, res, next) {
        Task
            .destroy({ where: { id: req.params.id } })
            .then(result => res.status(201).json(result))
            .catch(err => next(err))
    }
}

module.exports = Controller