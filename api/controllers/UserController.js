const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  if (Object.values(req.body).some((input) => input === "")) return;
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) return res.status(400).json({ error: "Something went wrong" });

  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });
  const jwtPayload = { fullName: user.fullName, email: user.email };
  const newToken = jwt.sign(jwtPayload, process.env.SECRET);
  user
    .save()
    .then(() => {
      res.status(201).json({
        email: user.email,
        token: newToken,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
