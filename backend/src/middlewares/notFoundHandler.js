// Middleware for not found routes (404)
const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.url} not found.`,
    status: 404,
  });
};

module.exports = notFoundHandler;