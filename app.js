const express = require("express");

const app = express();
// const PORT = 3003;

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista, baby");
});
//only the first terminator res.send is showing in the window

app.get("/Bruce-Banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/Dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/Jim-Lovell", (req, res) => {
  res.send("Houston, we have a problem");
});

app.get("/Gollum", (req, res) => {
  res.send("My precious");
});

app.get("/Jack-Dawson", (req, res) => {
  res.send("I'm king of the world!");
});

//MAGIC BALL

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

let index = Math.floor(Math.random() * (magic8Responses.length - 1));

let mag = magic8Responses[index];

app.get(`/magic8`, (req, res) => {
  res.send(`<h1 style='font-family: sans-serif'>${mag}</h1>`);
});

//listen
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

//export
module.exports = app;
