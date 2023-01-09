const express = require("express");

const app = express();
const PORT = process.env.PORT || 3003;

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

function random(arr) {

  const randomI = Math.floor(Math.random() * arr.length);

  // get random item
  const rItem = arr[randomI];

  return rItem;
}
//route 1
app.get("/terminator", (request, response) => {
  response.send(`I'll be back`);
  // response.send('Hasta la vista, baby') doesn't appear in the browser & shows error message (err_HTTP_Headers_sent)
});
//Route 2
app.get("/terminator2", (req, res) => {
  response.send("Hasta la vista, baby");
});

// Emeril  route3 
app.get("/emeril", (req, res) => {
  response.send(`Bam!`);
});

// Rocky Route 4
app.get("/rocky", (req, res) => {
  response.send(`Yo, Adrian`);
});

// Travis Bickle Route 5
app.get("/travis-bickle", (req, res) => {
  response.send(`You talkin to me?`);
});

// Bruce Banner - Don't make me angry (route 6)
app.get("/Bruce-Banner", (request, response) => {
  response.send(`Don't make me angry!`);
});

// Homer Simpson - D'Oh route 7 
app.get("/Homer-Simpson", (request, response) => {
    response.send(`D'Oh`);
  });


// route 8 
app.get("/regis", (req, res) => {
    res.send(`Is that your final answer?`)
})

// Hannibal Smith - I love it when a plan comes together route 9
app.get("/Hannibal-Smith", (req, res) => {
  response.send(`I love it when a plan comes together!`);
});

// 10 route- dorothy
app.get("/dorothy", (req, res) => {
    res.send(`Toto, I've got a feeling we're not in Kansas anymore`)
})
// Regis - Is that your final answer? (route 11)
app.get("/Regis", (req, res) => {
  response.send(`Is that your final answer?`);
});

// magic8 route 
app.get("/magic8", (req, res) => {
  response.send(
    `<h1 style= color:pink >${getRandomItem(magic8Responses)}</h1>`
  );
});

// Listener

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});