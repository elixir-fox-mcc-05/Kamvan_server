module.exports = (err, req, res, next) => {
  if (err.name == 'SequelizeValidationError') {
    const errors = err.errors.map(el => ({
      msg: el.message
    }));
    res.status(400).json({
      errors
    });
  } else if (err.name == 'JsonWebTokenError') {
    res.status(401).json({
      msg: `Please Login First!`
    });
  } else {
    console.log(err);
    res.status(err.code || 500).json({
      error: err
    });
  }
};
