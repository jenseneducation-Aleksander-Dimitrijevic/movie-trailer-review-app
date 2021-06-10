const router = require("express").Router();
const {
  signup,
  login,
  auth,
  review,
  getReviews,
  getUserReviews,
  logout,
} = require("../controllers/UserController");
const { verify } = require("../services/checkToken");

exports.signup = router.post("/api/signup", signup);
exports.login = router.post("/api/login", login);
exports.auth = router.get("/api/auth", verify, auth);
exports.review = router.post("/api/review", verify, review);
exports.getReviews = router.get("/api/reviews", getReviews);
exports.getUserReviews = router.get("/api/reviews", verify, getUserReviews);
exports.logout = router.get("/api/logout", verify, logout);
