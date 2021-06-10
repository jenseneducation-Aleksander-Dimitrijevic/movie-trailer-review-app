const mongoose = require("../db");
const schema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  review: {
    type: String,
    trim: true,
    required: true,
  },
  userID: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  movieID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", schema);
