const express = require("express");
const app = express();

const PORT = process.argv.PORT || 3003;
// Ports are also handled by deployment environmental variables
// This logic allows for either a defined port in .env and the deployed site or the assigned 3003 port

const movies = require("./movies.json");

app.get("/", (req, res) => {
  res.send("<h2>Movies App running...</h2>");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  res.send(movies.find((movie) => movie.movieId === id));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening for requests on port ${PORT}`);
});
