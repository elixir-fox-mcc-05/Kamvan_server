function errorHandler(err, req, res, next) {
    if (err.name == 'SequelizeValidationError') {
        res.status(400).json({ invalidEmail: `${err.errors[0].value} is not valid email` })
    } else {
        console.log(err)
        res.status(500).json({ err: err.name })
    }
}

module.exports = errorHandler