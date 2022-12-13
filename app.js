const express = require("express");

const app = express();
const PORT = 3003;

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

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

app.get("/terminator", (request, response) => {
  response.send(`I'll be back`);
  // response.send('Hasta la vista, baby') does not appear in the browser and shows error message in the terminal
});

app.get("/terminator2", (request, response) => {
  response.send("Hasta la vista, baby");
});

// Emeril - Bam!
app.get("/emeril", (request, response) => {
  response.send(`Bam!`);
});

// Steve McGarrett - Book 'em Danno!
app.get("/steve-mcgarrett", (request, response) => {
  response.send(`Bam!`);
});

// Coach Taylor - Clear eyes, full hearts, can't Lose
app.get("/Taylor", (request, response) => {
  response.send(`Clear eyes, full hearts, can't Lose`);
});

// Homer Simpson - D'Oh
app.get("/Homer-Simpson", (request, response) => {
  response.send(`D'Oh`);
});

// Bruce Banner - Don't make me angry
app.get("/Bruce-Banner", (request, response) => {
  response.send(`Don't make me angry!`);
});

// JJ Evans - Dy-no-myte!
app.get("/JJ-Evans", (request, response) => {
  response.send(`Dy-no-myte!`);
});

// Batman - To the Batmobile!
app.get("/Batman", (request, response) => {
  response.send(`To the Batmobile!`);
});

// Hannibal Smith - I love it when a plan comes together
app.get("/Hannibal-Smith", (request, response) => {
  response.send(`I love it when a plan comes together!`);
});

// Fraiser - I'm listening
app.get("/Fraiser", (request, response) => {
  response.send(`I'm listening!`);
});

// Regis - Is that your final answer?
app.get("/Regis", (request, response) => {
  response.send(`Is that your final answer?`);
});

// magic8
app.get("/magic8", (request, response) => {
  response.send(
    `<h1 style= color:skyblue >${getRandomItem(magic8Responses)}</h1>`
  );
});

// Listener

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
