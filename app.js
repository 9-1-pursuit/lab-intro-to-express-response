// Dependencies
const express = require("express");

// Configuration
const app = express();
// const PORT = 3003;

// Variable
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

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// Catchphrases
app.get("/ace-ventura", (req, res) => {
  res.send("Alrighty then!");
});
app.get("/buzz-lightyear", (req, res) => {
  res.send("To infinity, and beyond!");
});
app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});
app.get("/gollum", (req, res) => {
  res.send("My precious");
});
app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});
app.get("/james-bond", (req, res) => {
  res.send("The name is Bond, James Bond");
});
app.get("/joker", (req, res) => {
  res.send("Why so serious?");
});
app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});
app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend");
});

// Magic 8 Ball
app.get("/magic8", (req, res) => {
  const randomIndex = Math.floor(Math.random() * 19);
  res.send(
    `<h1 style="background-color: black; color: white; height: 100%; display: flex; justify-content: center; align-items: center">${magic8Responses[randomIndex]}</h1>`
  );
});

//Listen
// app.listen(PORT, () => {
//   console.log(`waiting for a request on port ${PORT}`);
// });

// Export
module.exports = app
