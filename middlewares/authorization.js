const { Task } = require('../models/index.js');

function authorization(req,res,next){
    let { taskId } = req.params 
    Task.findByPk(Number(taskId))
        .then(data => {
            if(data) {
                if(data.UserId == req.currentUserId && data.UserOrganization == req.currentUserOrganization){ 
                    next()
                }
                else {
                    return next ({
                        name: `Unauthorized`,
                        message: `Unauthorized. Please login first`
                    })
                }
            }
            else {
                return next({
                    name: 'NotFound',
                    message: `Task with id ${taskId} NOT FOUND `
                })
            }
        })
}

module.exports = authorization;