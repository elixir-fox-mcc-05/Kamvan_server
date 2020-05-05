const {Task} = require('../models')

class TaskController {
    static findAll(req, res){
        const UserId = req.UserId
        Task.findAll({
            where : { UserId }
        })
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
    }

    static create(req, res) {
        const { title, description, assignedTo } = req.body;
        const UserId = req.UserId;
        Task.create({
            title,
            description,
            assignedTo,
            UserId
        })
            .then( data => {
                res.status(201).json({ title : data })
            } )
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static delete (req, res, next) {
        let { id } = Number(req.params);

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