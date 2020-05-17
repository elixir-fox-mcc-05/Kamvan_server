let {User, Task} = require('../models/index')

class TaskController {
    static show (req,res) {
        // console.log(req.headers);
        Task.findAll()
        .then((result) => {
            res.status(200).json({
                data: result
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'internal error',
            })
        })
    }

    static create (req,res) {
        let data = {
            point: req.body.point,
            title: req.body.title,
            assign: req.body.assign,
            status: req.body.status,
            UserId: req.currentUserId
            // sementara
        }
        Task.create(data)
        .then((result) => {
            res.status(200).json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                msg: 'internal error'
            })
        })
    }

    static step (req,res) {
        let ext = -1
        if(req.body.step == 'next') ext = 1
        let newStat =  req.body.task.status + (ext)
        Task.update(
        {
            status: newStat
        },
        { 
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
            res.status(200).json({
                data: result
            })
            }).catch((err) => {
                console.log(err);
            });
    }

    
    static delete (req,res) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(200).json({
                    data: result
                })
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = TaskController