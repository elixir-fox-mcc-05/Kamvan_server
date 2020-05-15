const { Kanban, User } = require('../models')

class KanbanController {

  static show(req, res, next) {
    let userId = req.currentUserId
    console.log('masuk findall');
    Kanban.findAll({
      include: [{model: User, attributes: ['email']}]
    })
      .then((result) => {
        console.log(result);
        return res.status(200).json(result)
      })
      .catch((err) => {
        next(err)
      })
  }

  static add(req, res, next) {
    let userId = req.currentUserId
    let tag = ''
    let { title, description } = req.body
    let newdata = {
      title,
      description,
      tag,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    Kanban.create(newdata)
      .then(result => {
        return res.status(201).json({ result })

      })
      .catch(err => {
        next({
          "name": "InternalServer",
          errors: [{ msg: 'Internal Server Error' }]
        })
      })
  }
  static update(req, res, next) {
    let id = +req.params.id
    let { tag } = req.body
    let updatedData = {
      tag
    }

    Kanban.findOne({ where: { id: id } })
      .then(data => {
        if (!data) next({
          "name": "NotFound",
          errors: [{ msg: 'Data not Found' }]
        })
        else {
          Kanban.update(updatedData, { where: { id: data.id } })
            .then(result => {
              return res.status(200).json({ result })
            })
        }
      })
      .catch(err => {
        next({
          "name": "InternalServer",
          errors: [{ msg: 'Internal Server Error' }]
        })
      })
  }

  static delete(req, res, next) {
    let id = req.params.id
    Kanban.destroy({ where: { id: id } })
      .then((result) => {
        return res.status(201).json({ msg: 'Success Delete' })
      })
      .catch((err) => {
        next({ name: 'NotFound', errors: [{ msg: 'Data not Found' }] })
      })
  }
}

module.exports = KanbanController