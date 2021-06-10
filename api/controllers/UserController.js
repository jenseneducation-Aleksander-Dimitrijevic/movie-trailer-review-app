const User = require("../models/User");
const Review = require("../models/Review");
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
    maxAge: 900000,
    httpOnly: true,
  };

  res.cookie("auth", token, options);

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
    maxAge: 900000,
    httpOnly: true,
  };

  const cookie = res.cookie("auth", token, options);

  if (cookie) {
    res.redirect("/api/auth");
  }
};

exports.auth = (req, res) => {
  res.status(200).json(req.user);
};

exports.review = async (req, res) => {
  if (req.body.input === "") return;
  const user = await User.findOne({ email: req.user.email });
  const newReview = new Review({
    fullName: user.fullName,
    email: user.email,
    userID: user._id,
    review: req.body.input,
  });
  newReview
    .save()
    .then(() => {
      res.status(201).json(newReview);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ email: req.user.email });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
