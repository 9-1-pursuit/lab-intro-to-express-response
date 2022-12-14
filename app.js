const express = require("express");
const app = express();

const PORT = process.argv.PORT || 3003;
// Ports are also handled by deployment environmental variables
// This logic allows for either a defined port in .env and the deployed site or the assigned 3003 port

const movies = require("./data/movies.json");
const catchPhrases = require("./data/catchPhrases.json");
const magic8Responses = require("./data/magic8Responses");

app.get("/", (req, res) => {
  res.send("<h2>App running...</h2>");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.movieId === id);
  movie ? res.send(movie) : res.send("<h1>404: Page Not Found</h1>");
});

app.get("/magic8", (req, res) => {
  const rand = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<h1>${magic8Responses[rand]}</h1>`);
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  const phrase = catchPhrases.find(
    (phrase) => phrase.quotee === name.toLowerCase()
  );
  phrase
    ? res.send(`<h1>${phrase.quote}</h1>`)
    : res.send("<h1>404: Page Not Found</h1>");
});

app.listen(PORT, (err) => {
  if (err) {
    console.err(err);
  }
  console.log(`Server listening for requests on port ${PORT}`);
});

module.exports == app;
