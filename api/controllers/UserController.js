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
  const token = jwt.sign(jwtPayload, process.env.SECRET);

  let options = {
    maxAge: 90000,
    httpOnly: true,
  };

  res.cookie("__user__", token, options);

  user
    .save()
    .then(() => {
      res.redirect("/api/auth");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.login = async (req, res) => {
  if (Object.values(req.body).some((input) => input === "")) return;
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Something went wrong" });

  const jwtPayload = { fullName: user.fullName, email: user.email };
  const token = jwt.sign(jwtPayload, process.env.SECRET);

  let options = {
    maxAge: 90000,
    httpOnly: true,
  };

  const cookie = res.cookie("__user__", token, options);

  if (cookie) {
    res.redirect("/api/auth");
  }
};

exports.auth = (req, res) => {
  res.status(200).json(req.user);
};
