const Model = require('../models')
const Title = Model.Title

class TitleController {
    static findAll(req, res){
        const UserId = req.UserId
        Title.findAll({
            where : { UserId }
        })
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
    }

    static create(req, res) {
        const { title, description, point, assignedto } = req.body
        const UserId = req.UserId
        Title.create({
            title,
            description,
            point,
            assignedto,
            UserId
        })
        
            .then( data => {
                res.status(201).json({ title : data })
            } )
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static delete (req, res, next) {
        let { id } = req.params

        Title.destroy({where : {id}})
            .then(data => {
                res.status(200).json({ msg : `Title ${id} successfully deleted!` })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = TitleController;