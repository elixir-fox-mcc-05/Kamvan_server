let { Task } = require('../models')

class TaskCon {
    static show(req,res) {
        Task.findAll()
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static add(req,res) {
        let {title,description,point,assign_to} = req.body

        Task.create({
            title,
            description,
            point,
            assign_to
        })
        .then(result=>{
            res.status(201).json({
                msg : 'success adding task',
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error : err.errors[0].message
            })
        })


    }
    static edit(req,res) {
        // res.send({
        //     id : req.params.id,
        //     status : req.body.status
        // })
        Task.update({
            status : req.body.status
        }, {
            where : {
                id : req.params.id
            }
        })
        .then(result=>{
            res.status(201).json({
                msg : "success update data"
            })
            console.log(result)
        })
        .catch(err=>{
            res.status(500).json({
                error : "internal server error"
            })
            console.log(err)
        })
    }
    static delete(req,res) {
        Task.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(result=>{
            res.status(200).json({
                msg : `success deleting task with id ${req.params.id}`
            })
        })
        .catch(err=>{
            res.status(500).json({
                error : 'internal server error'
            })
        })
    }
}

module.exports = TaskCon