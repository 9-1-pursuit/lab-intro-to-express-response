const express = require("express");
const app = express();

const PORT = process.argv.PORT || 3003;
// Ports are also handled by deployment environmental variables
// This logic allows for either a defined port in .env and the deployed site or the assigned 3003 port

const movies = require("./movies.json");

app.get("/", (req, res) => {
  res.send("<h2>App running...</h2>");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/terminatorjson", (req, res) => {
  res.send();
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.listen(PORT, () => {
  console.log(`Server listening for requests on port ${PORT}`);
});
