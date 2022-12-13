// Node import
const express = require("express");
// console.log(express);
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

// Testing route 200
app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

// Testing route 418
app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});

// Emeril route
app.get("/Emeril", (req, res) => {
  res.send(`Bam!`);
});

// Steve McGarrett route
app.get("/Steve-McGarrett", (req, res) => {
  res.send(`Book 'em Danno!`);
});

// Coach Taylor route
app.get("/Coach-Taylor", (req, res) => {
  res.send(`Clear eyes, full hearts, can't Lose`);
});

// Homer Simpson route
app.get("/Homer-Simpson", (req, res) => {
  res.send(`D'Oh`);
});

// Bruce Banner route
app.get("/Bruce-Banner", (req, res) => {
  res.send(`Don't make me angry`);
});

// JJ Evans route
app.get("/JJ-Evans", (req, res) => {
  res.send(`Dy-no-myte!`);
});

// Batman route
app.get("/Batman", (req, res) => {
  res.send(`To the Batmobile!`);
});

// Hannibal Smith route
app.get("/Hannibal-Smith", (req, res) => {
  res.send(`I love it when a plan comes together`);
});

// Fraiser route
app.get("/Fraiser", (req, res) => {
  res.send(`I'm listening`);
});

// Regis route
app.get("/Regis", (req, res) => {
  res.send(`Is that your final answer?`);
});

// Borg route
app.get("/Borg", (req, res) => {
  res.send(`Resistance is futile`);
});

// Fox Mulder route
app.get("/Fox-Mulder", (req, res) => {
  res.send(`The truth is out there`);
});

// Harry Callahan route
app.get("/Harry-Callahan", (req, res) => {
  res.send(`Go ahead, make my day`);
});

// Travis Bickle route
app.get("/Travis-Bickle", (req, res) => {
  res.send(`You talkin' to me?`);
});

// Tony Montana route
app.get("/Tony-Montana", (req, res) => {
  res.send(`Say hello to my little friend`);
});

// Zeus route
app.get("/Zeus", (req, res) => {
  res.send(`Release the Kraken`);
});

// James Bond route
app.get("/James-Bond", (req, res) => {
  res.send(`the name is Bond, James Bond`);
});

// Dorothy route
app.get("/Dorothy", (req, res) => {
  res.send(`Toto, I've got a feeling we're not in Kansas anymore`);
});

// Rod Tidwell route
app.get("/Rod-Tidwell", (req, res) => {
  res.send(`Show me the money!`);
});

// Frankenstein route
app.get("/Frankenstein", (req, res) => {
  res.send(`It's alive! It's alive`);
});

// Jim Lovell route
app.get("/Jim-Lovell", (req, res) => {
  res.send(`Houston, we have a problem`);
});

// Rocky route
app.get("/Rocky", (req, res) => {
  res.send(`Yo, Adrian`);
});

// Gollum route
app.get("/Gollum", (req, res) => {
  res.send(`My precious`);
});

// Jack Dawson route
app.get("/Jack-Dawson", (req, res) => {
  res.send(`I'm king of the world!`);
});

// Terminator route
app.get("/terminator", (req, res) => {
  res.send("Ill be back, Hasta la vista, baby");
});

// magic8 route
app.get("/magic8", (req, res) => {
  res.send(
    `<h1 style="color: hotPink; text-align: center">
    ${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}
    </h1>`
  );
});

// Listener
// app.listen(PORT, () => {
//   console.log(`Listening for requests on port ${PORT}`);
// });

// EXPORT
module.exports = app;
