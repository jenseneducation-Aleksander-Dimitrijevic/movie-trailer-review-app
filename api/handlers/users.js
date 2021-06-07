const router = require("express").Router();
const { signup, login, auth } = require("../controllers/UserController");
// const User = require("../models/User");
const { verify } = require("../services/checkToken");

exports.signup = router.post("/api/signup", signup);
exports.login = router.post("/api/login", login);
exports.auth = router.get("/api/auth", verify, auth);
