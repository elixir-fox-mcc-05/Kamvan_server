const Model = require('../models')
const Status = Model.Status
const Title = Model.Title

class StatusController {
    static findAll(req, res) {
        Status.findAll({ 
            include : {model : Title},
            order: [['id', "ASC"]]
        })
            .then(result => {
                // console.log('ini result \n =====',result)
                res.status(200).json({result})
            })
            .catch(err => {
                res.status(500).json({error : err.message})
            })
    }
}

module.exports = StatusController