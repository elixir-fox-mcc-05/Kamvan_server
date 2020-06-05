const {Task, User} = require('../models');

class TaskController {
    static showAll(req, res, next){
        let option = {
            include: {
                model: User,
                attributes: ['id','fullname','organization'],
                where: {
                    organization: req.userOrganization
                }
            }
        }
        Task.findAll(option)
            .then(response => {
                res.status(200).json({
                    tasks: response
                })
            })
            .catch(err => {
                next(err);
            })
    }
    static create(req, res, next){
        let {title, description, point, assignedto, category} = req.body;
        const UserId = req.userId;
        let task = {
            title,
            description,
            point,
            assignedto,
            UserId
        }
        Task.create(task)
            .then(response => {
                res.status(201).json(response);
            })
            .catch(err => {
                next(err);
            })
    }
    static update(req, res, next){
        let {title, description, point, assignedto} = req.body;
        let newTask = {
            title,
            description,
            point,
            assignedto,
            category: category.toLowerCase(),
        }
        const option = {
            where: {
                id: req.params.id
            },
            returning: true
        }
        Task.update(newTask, option)
            .then(updated => {
                if(!updated[0]){
                    next({
                        code: 400,
                        message: 'Please provide correct data !'
                    })
                }else{
                    res.status(200).json(updated[1]);
                }
            })
            .catch(err => {
                next(err);
            })
    }
    static delete(req, res, next){
        const { id } = req.params;
        const option = {
            where: {
                id
            }
        }
        let deleted;
        Task.findByPk(id)
            .then(response => {
                if(response){
                    deleted = response;
                    return Task.destroy(option);
                }
            })
            .then(() => {
                res.status(200).json(deleted);
            })
            .catch(err => {
                next(err);
            })
    }
    static changeCategory(req, res, next){
        let newCategory = {
            category: req.body.category
        }
        const option = {
            where : {
                id : req.params.id
            }
        }
        Task.update(newCategory,option)
            .then(response => {
                res.status(200).json({
                    message: 'success',
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = TaskController