require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const { getPopularMovies, SearchMovies, TopRatedMovies, LatestMovies, LatestSeries, MovieTrailers, TvTrailers } = require("./handlers/movies");


app.use("/", getPopularMovies);
app.use("/", SearchMovies);
app.use("/", TopRatedMovies)
app.use("/", LatestMovies)
app.use("/", LatestSeries)
app.use("/", MovieTrailers)
app.use("/", TvTrailers)


app.listen(PORT, () =>
  console.log(`Server up and running on port: ${PORT}. Happy coding! =)`)
);
