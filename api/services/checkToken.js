const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const token = req.cookies.auth;
  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) return res.status(403).json({ error: err.message });
    req.user = data;
    next();
  });
};
