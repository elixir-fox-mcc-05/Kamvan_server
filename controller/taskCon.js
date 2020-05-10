let { Task } = require('../models')

class TaskCon {
    static show(req,res) {
        Task.findAll({
            where : {
                user_org : req.body.user_org
            }
        })
        .then(result=>{
            if(result) {
                let task = []
                result.forEach(element => {
                    let obj = {
                        id : element.id,
                        title : element.title,
                        description : element.description,
                        point : element.point,
                        status : element.status,
                    }
                    task.push(obj)
                });
                res.status(200).json({
                    task
                })
            } else {
                res.status(200).json({
                    result : []
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static add(req,res) {
        let {title,description,point,assign_to,user_id,user_org} = req.body
        Task.create({
            title,
            description,
            point,
            assign_to,
            user_id,
            user_org
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
        Task.update({
            title : req.body.title,
            description : req.body.description,
            point : req.body.point,
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