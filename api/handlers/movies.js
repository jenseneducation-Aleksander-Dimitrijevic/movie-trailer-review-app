const axios = require("axios");
const router = require("express").Router();

exports.getPopularMovies = router.get("/", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


exports.SearchMovies = router.get("/", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}?query=${req.params.keyword}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});