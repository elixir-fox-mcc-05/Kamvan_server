const { Task } = require('../models')

class TaskController {

    static add(req, res) {
        
        let { title, points, description , category} = req.body
        console.log('organization : ',req.SelectOrganization)
        Task
            .create({ title, points, description,category, organization : req.SelectOrganization, UserId : req.LoginId })
            .then(data => {
                console.log('add nyo')
                res.status(201).json({
                    id : data.id,
                    title : data.title,
                    points : data.points,
                    description : data.description,
                    category : data.category,
                    organization : data.organization,
                    UserId : data.UserId
                })
            })
            .catch(err => {
                res.status(400).json({
                    err : err.message.split(',')
                }) 
            })

    }

    static list(req, res, next) {

        Task
            .findAll({where: {organization : req.SelectOrganization}})
            .then(data => {
                res.status(200).json({
                    data : data
                })
            })
            .catch(err => {
                    next(err)
            })
        
    }

    static select(req, res) {

        Task
            .findByPk(req.params.id)
            .then(data => {
                res.status(200).json({
                    id: data.id,
                    title: data.title,
                    points: data.points,
                    description: data.description,
                    category : data.category
                })
            })
            .catch(err => {
                res.status(404).json({
                    err: 'data not found'
                })
            })

    }

    static update(req, res) {

        let {category} = req.body
        console.log('tes update')
        Task
            .update({'category' : category},{where : {id : req.params.id}})
            .then(data => {
                return Task.findByPk(req.params.id)
            })
            .then(data => {
                console.log(data)
                res.status(200).json({
                    id: data.id,
                    title : data.title,
                    points : data.points,
                    description : data.description,
                    category : data.category
                })
            })
            .catch(err => {
                res.status(404).json({
                    err : err.message
                })
            })
    }

    static delete(req, res) {
        let results;
        Task
            .findByPk(req.params.id)
            .then(data1 => {
                
                results = Object.assign(data1)
                
                return Task.destroy({where : {id : req.params.id},returning : true})
            })
            .then(data => {
                console.log('deleted?')
                res.status(200).json({
                    task : results
                })
            })
            .catch(err => {
                res.status(404).json({
                    err : 'unable to delete'
                })
            })
    }
}

module.exports = TaskController