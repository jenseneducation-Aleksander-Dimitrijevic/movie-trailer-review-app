const axios = require("axios");
const router = require("express").Router();

exports.getPopularMovies = router.get("/api/popular", async (req, res) => {
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

exports.SearchMovies = router.get("/api/search/:keyword", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${req.params.keyword}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.TopRatedMovies = router.get(
  "/api/top-rated-movies",
  async (req, res) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
      );
      const movies = resp.data.results;
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

exports.LatestMovies = router.get("/api/latest", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.LatestSeries = router.get("/api/latest-series", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


exports.MovieTrailers = router.get("/api/movie-trailers/:id", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}/videos?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


exports.TvTrailers = router.get("/api/tv-trailers/:id", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${req.params.id}/videos?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.movieDetails = router.get("/api/movies/:movie_id", async (req, res) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.movie_id}?api_key=${process.env.API_KEY}`
    );
    const movies = resp.data;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
