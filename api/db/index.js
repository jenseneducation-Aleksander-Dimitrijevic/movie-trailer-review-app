const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log("Failed to establish connection to database");
    console.log("Successfully connected to database.");
  }
);

module.exports = mongoose;
