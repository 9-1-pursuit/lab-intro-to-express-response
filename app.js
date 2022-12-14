const express = require("express");
const app = express();

const PORT = process.argv.PORT || 3003;
// Ports are also handled by deployment environmental variables
// This logic allows for either a defined port in .env and the deployed site or the assigned 3003 port

const movies = require("./movies.json");
const quotes = require("./catchPhrases.json");

app.get("/", (req, res) => {
  res.send("<h2>App running...</h2>");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.movieId === id);
  res.send(movie);
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  const quote = quotes.find((quote) => quote.quotee === name.toLowerCase());
  res.send(`<h1>${quote?.quote || "404: Page Not Found"}</h1>`);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening for requests on port ${PORT}`);
});
