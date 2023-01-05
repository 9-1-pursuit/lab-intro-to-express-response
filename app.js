// Dependencies

const express = require("express");

//configuration

const app = express();
const PORT = 3003;

//routes
const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (request, response) => {
  response.send("<h1>Hello, world!<h1>");
});

app.get("/Homer", (req, res) => {
  res.send("<h1>Doh<h1>");
});

app.get("/Terminator", (req, res) => {
  res.send("<h1>Hasta la vista, baby<h1>");
});

///6 more catch phrases

app.get("/Rocky", (req, res) => {
  res.send("<h1>Yo, Adrian<h1>");
});

app.get("/Gollum", (req, res) => {
  res.send("<h1>My precious<h1>");
});

app.get("/Jack-Dawson", (req, res) => {
  res.send("<h1>I'm king of the world!<h1>");
});

app.get("/Zeus", (req, res) => {
  res.send("<h1>Release the Kraken<h1>");
});

app.get("/James-Bond", (req, res) => {
  res.send("<h1>the name is Bond, James Bond<h1>");
});

app.get("/JJ-Evans", (req, res) => {
  res.send(" <h1>Dy-no-myte!<h1>");
});

///

app.get("/magic8", (req, res) => {
  let rando = Math.floor(Math.random() * magic8Responses.length);
  res.send(magic8Responses[rando]);
});

//listen
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
