const router = require("express").Router();
const { signup } = require("../controllers/UserController");
// const User = require("../models/User");

exports.signup = router.post("/api/signup", signup);
