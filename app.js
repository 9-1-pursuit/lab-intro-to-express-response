const express = require("express");
const app = express();
// const CSS = require("/app.css");
const PORT = process.env.PORT || 3003;
const str = "Hello there!\nTry one of these routes.";
//
//* bring in magic8ball file
// const magic8ball = require("./Magic8ball");
// const randomResponse = require("randomResponse");
// let random_index = require("random_index");
//
app.get("/", (req, res) => {
  res.send(str);
});
//Tim Gunn
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

// Emirel
app.get("/emirel", (req, res) => {
  res.send(`<h1>BAM!</h1>`);
});

//Batman
app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

//Regis
app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});

//Zeus
app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

//James Bond -
app.get("/jamesbond", (req, res) => {
  res.send("the name is Bond, James Bond");
});
//Rod Tidwell -
app.get("/rod-tidwell", (req, res) => {
  res.send("Show me the money!");
});
//Rocky -
app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});
//Jack Dawson -

app.get("/jackdawson", (req, res) => {
  res.send(`<h1>I'm king of the world!</h1>`);
});
//Terminator
app.get("/terminator", (req, res) => {
  res.send("Hasta la vista, baby");
  res.send("Ill be back");
  // only logs the first message
});

//! Magic8Ball
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

//randomly returns a response

// const handleRandomResponse = () => {
const random_index = Math.floor(Math.random() * magic8Responses.length);

let randomResponse = magic8Responses[random_index];
// };
// handleRandomResponse();

app.get("/magic8ball", (req, res) => {
  res.send(randomResponse);
});
app.listen(PORT, () => {
  console.log(`Very active on ${PORT}`);
});
