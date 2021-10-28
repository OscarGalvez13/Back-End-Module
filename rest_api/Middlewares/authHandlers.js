const authHandler = (req, res, next) => {
  const { apitoken } = req.headers;
  console.log(req.headers);
  if (apittoken === "Token-123") {
    next();
  } else {
    res.status(403).json({
      ok: false,
      message: unauthorized,
    });
  }
};

module.exports = authHandler;
