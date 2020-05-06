const { Kanban } = require('../models');
const { User } = require('../models');

class KanbanController {
    static create(req, res, next) {
        let { title, description, point, organization } = req.body;
        const status = 'Backlog';
        const UserId = req.currentUserId;
        const values = {
            title, 
            description,
            point,
            status,
            UserId, 
            organization
        };
        Kanban
            .create(values)
                .then(kanban => {
                    res.status(201).json(kanban);
                })
                .catch(err => {
                    next(err)
                })
    }

    static findAll(req, res, next) {
        const options = {
            OrderBy: 'id',
            // include: { model: User, attributes: { exclude: ["password"] }, required: false },
            where: {
                organization: 'Hacktiv8'
            }
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

    static update(req, res, next) {
        let { title, description, point } = req.body;
        let kanbanId = req.params.kanbanid;
        console.log(title, description, point, kanbanId)
        const options = {
            where : {
                id: kanbanId
            },
            returning: true
        };
        const values = {
            title,
            description,
            point
        };
        Kanban
            .update(values, options)
                .then(kanban => {
                    res.status(200).json(kanban[1][0]);
                })
                .catch(err => {
                    next(err);
                })
    }

    static delete(req, res, next) {
        let kanbanId = req.currentUserId;
        const options = {
            where: {
                id: kanbanId
            }
        };
        Kanban
            .destroy(options)
                .then(kanban => {
                    res.status(200).json('Successfully delete kanban');
                })
                .catch(err => {
                    next(err);
                })
    }
}

module.exports = KanbanController;