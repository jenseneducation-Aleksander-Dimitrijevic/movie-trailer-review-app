require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

const {
  getPopularMovies,
  SearchMovies,
  TopRatedMovies,
  LatestMovies,
  LatestSeries,
  MovieTrailers,
  TvTrailers,
  movieDetails,
} = require("./handlers/movies");

const {
  signup,
  login,
  auth,
  review,
  logout,
  getReviews,

} = require("./handlers/users");

app.use(express.json());
app.use(cookieParser());

app.use("/", getPopularMovies);
app.use("/", SearchMovies);
app.use("/", TopRatedMovies);
app.use("/", LatestMovies);
app.use("/", LatestSeries);
app.use("/", MovieTrailers);
app.use("/", TvTrailers);
app.use("/", movieDetails);

app.use("/", signup);
app.use("/", login);
app.use("/", auth);
app.use("/", review);
app.use("/", getReviews);
app.use("/", logout);

app.listen(PORT, () =>
  console.log(`Server up and running on port: ${PORT}. Happy coding! =)`)
);
