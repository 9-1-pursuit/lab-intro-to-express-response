// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();
// const PORT = 3003;

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

// ROUTES
app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});

app.get("/terminator", (req, res) => {
  res.send(`I'll be back`, `Hasta la vista, baby`);
  // res.send("Hasta la vista, baby"); // causes error - can't have more than 1 responses
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/homer", (req, res) => {
  res.send(`D'oh`);
});

app.get("/batman", (req, res) => {
  res.send(`To the Batmobile!`);
});

app.get("/zeus", (req, res) => {
  res.send(`Release the Kraken`);
});

app.get("/tony-montana", (req, res) => {
  res.send(`Say hello to my little friend`);
});

app.get("/bruce-banner", (req, res) => {
  res.send(`Don't make me angry`);
});

app.get("/james-bond", (req, res) => {
  res.send(`the name is Bond, James Bond`);
});

app.get("/frakenstein", (req, res) => {
  res.send(`It's alive! It's alive`);
});

app.get("/rocky", (req, res) => {
  res.send(`Yo, Adrian`);
});

app.get("/magic8", (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

// LISTEN
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

//EXPORT
module.exports = app;
