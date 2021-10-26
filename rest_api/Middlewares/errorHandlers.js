const logErrors = (err, req, res, next) => {
  console.log("Se ejecuto logErrors");
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { logErrors, errorHandler };
