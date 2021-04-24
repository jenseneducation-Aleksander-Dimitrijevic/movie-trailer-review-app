require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const { getPopularMovies, SearchMovies } = require("./handlers/movies");


app.use("/api/popular", getPopularMovies);
app.use("/api/search/:keyword", SearchMovies);


app.listen(PORT, () =>
  console.log(`Server up and running on port: ${PORT}. Happy coding! =)`)
);
