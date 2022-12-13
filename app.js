// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

const magic8Responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - Definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes, and signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];
//Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.get('/', (req, res) => {
  res.status(418).send('Hello, world!');
});
// app.get('/', (req, res) => {
//   res.send('Hello, world');
// });
//! 1
app.get('/tim-gunn', (req, res) => {
  res.status(200).send('Make it work');
});
//! 2
app.get('/terminator', (req, res) => {
  res.status(200).send(`Hasta la vista, baby, I'll be back`);
});
//! 3
app.get('/karate-kid', (req, res) => {
  res.status(200).send('wax on, wax off');
});
//! 4
app.get('/Emeril', (req, res) => {
  res.status(200).send('Bam!');
});

//! 5
app.get('/Steven-McGarrett', (req, res) => {
  res.status(200).send(`Book 'em Danno!`);
});
//! 6
app.get('/Coach-Taylor', (req, res) => {
  res.status(200).send(`Clear eyes, full hearts, can't lose!`);
});
//! 7
app.get('/Homer-Simpson', (req, res) => {
  res.status(200).send(`D'Oh`);
});
//! 8
app.get('/Bruce-Banner', (req, res) => {
  res.status(200).send(`Don't make me angry`);
});
//! 9
app.get('/JJ-Evans', (req, res) => {
  res.status(200).send(`Dy-no-myte!`);
});

//! 10
app.get('/Batman', (req, res) => {
  res.status(200).send('To the Batmobile!');
});

app.get('/magic8', (req, res) => {
  res
    .status(200)
    .send(
      `<h1>${
        magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
      }</h1>`
    );
});

//EXPORT
module.exports = app;
