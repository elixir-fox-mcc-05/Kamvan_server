const { Kanban } = require('../models');
const { User } = require('../models');

class KanbanController {
    static create(req, res, next) {
        let { title, description, point, UserId } = req.body;
        const status = 'Backlog';
        const values = {
            title, 
            description,
            point,
            status,
            UserId
        };
        Kanban
            .create(values)
                .then(kanban => {
                    res.status(201).json(kanban);
                })
                .catch(err => {
                    // next({
                    //     name: 'Internal Server Error',
                    //     errors: { message: err.message}
                    // })
                    next(err)
                })
    }

    static findAll(req, res, next) {
        const options = {
            OrderBy: 'id',
            include: { model: User, attributes: { exclude: ["password"] }, required: false }
        };
        Kanban
            .findAll(options)
                .then(kanban => {
                    res.status(200).json(kanban);
                })
                .catch(err => {
                    next(err);
                })
    }
}

module.exports = KanbanController;