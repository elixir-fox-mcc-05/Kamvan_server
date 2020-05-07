module.exports = (err, req, res, next) => {
    if (err.name === "JsonWebTokenError") {
        res.status(401).json({
            msg: "You are unauthorized to complete this action, please sign in or contact admin",
            loc: "@jwt"
        })
    } else if (err.name === "SequelizeValidationError") {
        let errors = err.errors.map(element => {
            msg: element.message
            loc: "@sequelize"
        })
        res.status(400).json({
            code: 400,
            type: "Bad Request",
            errors
        })
    } else if (err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({
            msg: "Email has been registered"
        })
    } else {
        res.status(err.code || 500).json({
            error: err
        })
    }
}