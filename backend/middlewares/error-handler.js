const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.status || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
};

module.exports = errorHandler;
