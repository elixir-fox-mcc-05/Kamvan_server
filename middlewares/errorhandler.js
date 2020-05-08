module.exports = (err, req, res, next) => {
    if (err.name == 'SequelizeValidationError') {
        const errors = err.errors.map(el => ({
            message: el.message }));
        res.status(400).json({ 
            code: 400,
            type: `Bad Request`,
            errors: errors 
        });
    } else if (err.name == `SequelizeUniqueConstraintError`) {
        res.status(400).json({ 
            code: 400,
            type: `Bad Request`,
            errors: { message: err.message }
        });
    } else if (err.name == 'JsonWebTokenError') {
        res.status(401).json({ 
            code: 401,
            type: 'Unauthorized',
            errors: `Please login first`
        });
    } else if (err.name == 'Internal Server Error') {
        res.status(500).json({
            code: 500,
            type: 'Internal Server Error',
            errors: err.errors
        })
    } else if (err.name == 'Bad Request') {
        res.status(400).json({
            code: 400,
            type: 'Bad Request',
            errors: err.errors
        })
    } else if (err.name == 'Unauthorized') {
        res.status(401).json({
            code: 401,
            type: 'Unauthorized',
            errors: err.errors
        })
    } else if (err.name == 'Not Found') {
        res.status(400).json({
            code: 404,
            type: 'Not Found',
            errors: err.errors
        })
    }
}