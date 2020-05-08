const { Kanban } = require('../models');
const { User } = require('../models');

class KanbanController {
    static create(req, res, next) {
        let { title, description, point } = req.body;
        const UserId = req.currentUserId;
        const status = 'Backlog';
        const organization = req.currentOrganization;
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
        const options = {
            where : {
                id: kanbanId
            },
            returning: true
        };
        const values = {
            title,
            description,
            point, 
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

    static updateCategory(req, res, next) {
        let { status } = req.body;
        let kanbanId = req.params.kanbanid;
        const options = {
            where : {
                id: kanbanId
            },
            returning: true
        };
        const values = {
            status
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
        let kanbanId = req.params.kanbanid;
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