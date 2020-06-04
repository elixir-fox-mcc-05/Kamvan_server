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

        async function createNewKanban () {
            try {
                const newKanban = await Kanban.create(values) 

                const kanban = await Kanban.findAll({
                    where: {
                        organization: req.currentOrganization
                    },
                    order: [[ 'id', 'asc']]
                })
                req.io.emit('fetch-kanban', kanban)
                res.status(201).json(newKanban)
            }
            catch (err) {
                next(err)
            }
        }
        createNewKanban()
        // Kanban
        //     .create(values)
        //         .then(kanban => {
        //             res.status(201).json(kanban);
        //         })
        //         .catch(err => {
        //             next(err)
        //         })
    }

    static findAll(req, res, next) {
        const options = {
            order: [[ 'id', 'asc']],
            where: {
                organization: req.currentOrganization
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
        async function updateKanban () {
            try {
                const updatedKanban = await Kanban.update(values, options)

                const kanban = await Kanban.findAll({
                    where: {
                        organization: req.currentOrganization
                    },
                    order: [[ 'id', 'asc']]
                })
                req.io.emit('fetch-kanban', kanban)
                res.status(200).json(updatedKanban[1][0])
            }
            catch (err) {
                next(err)
            }
        }
        updateKanban()
        // Kanban
        //     .update(values, options)
        //         .then(kanban => {
        //             res.status(200).json(kanban[1][0]);
        //         })
        //         .catch(err => {
        //             next(err);
        //         })
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
        async function updateCategory () {
            try {
                const updatedKanban = await Kanban.update(values, options)
                const kanban = await Kanban.findAll({
                    where: {
                        organization: req.currentOrganization,
                    },
                    order: [[ 'id', 'asc']]
                })
                req.io.emit('fetch-kanban', kanban)
                res.status(200).json(updatedKanban[1][0])
            }
            catch (err) {
                next(err)
            }
        }
        updateCategory()
        // Kanban
        //     .update(values, options)
        //         .then(kanban => {
        //             res.status(200).json(kanban[1][0]);
        //         })
        //         .catch(err => {
        //             next(err);
        //         })
    }

    static delete(req, res, next) {
        let kanbanId = req.params.kanbanid;
        const options = {
            where: {
                id: kanbanId
            }
        };
        async function deleteKanban () {
            try {
                const deletedKanban = await Kanban.destroy(options)
                
                const kanban = await Kanban.findAll({
                    where: {
                        organization: req.currentOrganization
                    },
                    order: [[ 'id', 'asc']]
                })
                req.io.emit('fetch-kanban', kanban)
                res.status(200).json('Successfully delete kanban')
            }
            catch (err) {
                next(err)
            }
        }
        deleteKanban()
        // Kanban
        //     .destroy(options)
        //         .then(kanban => {
        //             res.status(200).json('Successfully delete kanban');
        //         })
        //         .catch(err => {
        //             next(err);
        //         })
    }
}

module.exports = KanbanController;