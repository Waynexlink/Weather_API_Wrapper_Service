const errorHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: "internal server error" || err.message });
};

module.exports = errorHandler;
