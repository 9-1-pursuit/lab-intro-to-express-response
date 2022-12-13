const express = require("express");

const PORT = process.env.PORT || 3003;

const app = express();

const missCleoResponses = [
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

app.get("/", (req, res) => {
  res.send(
    "<h1 style='color: red'>WELCOME TO SHAKESPEARE QUOTE APP!<h1>\n <p>Choose a name from the list of plays by the 'Bard of Avon' to see a quote --> e.g., '/1' --> Hamlet 'To be or not to be, that is the question!'<p> \n <p>1. Hamlet<p>\n <p>2. Romeo & Juliet<p>\n <p>3. Othello<p>\n <p>4. King Lear<p>\n <p>5. Taming of the Shrew<p>\n <p>6. As You Like It<p>\n <p>7. Richard III<p> \n <p>8. Macbeth<p> \n <p>9. Midsummer Nights Dream<p> \n <p>10. Julius Caesar<p>\n<h1 style='color: red'>HAVE THY FOURTUNE TOLD!<h1>\n<p>navigate to '/missCleoFortunes' to see what your future holds, oooooh! (Think of your question before you enter Miss Cleo's inner sanctum... <h1 style='color: red'>ONLY<h1>$9.99 per question)<p>"
  );
});

app.get("/1", (req, res) => {
  res.send(
    "<h1 style='color: red'>Hamlet<h1>\n<p>'To be or not to be, that is the question!'<p>"
  );
});
app.get("/2", (req, res) => {
  res.send(
    "<h1 style='color: red'>Romeo & Juliet<h1>\n<p>'Romeo,Romeo! Wherefore art thou Romeo?'<p>"
  );
});
app.get("/3", (req, res) => {
  res.send(
    "<h1 style='color: red'>Othello<h1>\n<p>'Reputation, reputation, reputation! O, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial.!'<p>"
  );
});
app.get("/4", (req, res) => {
  res.send(
    "<h1 style='color: red'>King Lear<h1>\n<p>'Nothing will come of nothing, speak again.'<p>"
  );
});
app.get("/5", (req, res) => {
  res.send(
    "<h1 style='color: red'>Taming of the Shrew<h1>\n<p>'Sit by my side, and let the world slip: we shall ne'er be younger.'<p>"
  );
});
app.get("/6", (req, res) => {
  res.send(
    "<h1 style='color: red'>As You Like It<h1>\n<p>'Beauty provoketh thieves sooner than gold.'<p>"
  );
});
app.get("/7", (req, res) => {
  res.send(
    "<h1 style='color: red'>Richard III<h1>\n<p>'I cannot prove a lover'<p>"
  );
});
app.get("/8", (req, res) => {
  res.send(
    "<h1 style='color: red'>Macbeth<h1>\n<p>'Fair is foul, and foul is fair!'<p>"
  );
});
app.get("/9", (req, res) => {
  res.send(
    "<h1 style='color: red'>Midsummer Nights Dream<h1>\n<p>'The course of true love never did run smooth.'<p>"
  );
});
app.get("/10", (req, res) => {
  res.send(
    "<h1 style='color: red'>Julius Caesar<h1>\n<p>'Beware the Ides of March.'<p>"
  );
});

app.get("/missCleoFortunes", (req, res) => {
  res.send(
    `<h1 style='color: red'>WELCOME TO MISS CLEO'S INNER SANCTUM<h1>\n<p>'My dear chil' I tell ya da trut', I tell ya evrythin' I consult my crystal ball and the answer to your question is... ${
      missCleoResponses[Math.floor(Math.random() * missCleoResponses.length)]
    } '<p>`
  );
});

app.listen(3003, () => {
  console.log(
    "Listening on Port 3003 -- Please enjoy the Shakespeare Quote App"
  );
});
