const User = require("../models/User");

exports.signup = (req, res) => {
  res.json(User);
};
