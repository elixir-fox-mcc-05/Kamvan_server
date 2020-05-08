const Model = require('../models')
const Title = Model.Title
const User = Model.User

class TitleController {
    static findAll(req, res){
        Title.findAll({
           include : { model : User }
        })
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
    }

    static create(req, res) {
        const { title, description, point, assignedto, StatusId } = req.body
        const UserId = req.UserId
        Title.create({
            title,
            description,
            point,
            assignedto,
            UserId,
            StatusId,
        })
        
            .then( data => {
                res.status(201).json({ title : data })
            } )
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static delete (req, res) {
        let { id } = req.params

        Title.destroy({where : {id}})
            .then(data => {
                res.status(200).json({ msg : `Title ${id} successfully deleted!` })
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }

    static edit (req, res) {
        const { title, description, point, assignedto, StatusId } = req.body
        const { id } = req.params

        Title.update({title, description, point, assignedto, StatusId}, {where: {id}, returning : true})

            .then(title => {
                res.status(200).json({title, msg : `Title ${id} succesfully update!`})
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }


}

module.exports = TitleController;