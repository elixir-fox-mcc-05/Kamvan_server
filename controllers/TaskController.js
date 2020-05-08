const {Task, User} = require('../models');

class TaskController {
    static showAll(req, res, next){
        let option = {
            include: {
                model: User,
                attributes: ['id','fullname','organization'],
                where: {
                    organization: 'Hacktiv8'
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
    static showById(req, res, next){
        
    }
    static create(req, res, next){
        
    }
    static update(req, res, next){
        
    }
    static delete(req, res, next){

    }
}

module.exports = TaskController