//Dependency
const express = require('express')

//Config
const app = express()


//ROUTES
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!');
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back`)
})

app.get('/terminator2', (req, res) => {
    res.send(`Hasta la vista, baby`)
})

app.get('/Emeril', (req, res) => {
    res.send(`Bam!`)
})

app.get('/Steve McGarrett', (req, res) => {
    res.send(`Book 'em Danno!`)
})

app.get('/Coach Taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
})

app.get('/Homer Simpson', (req, res) => {
    res.send(`D'Oh`)
})

app.get('/Bruce Banner', (req, res) => {
    res.send(`Don't make me angry`)
})

app.get('/JJ Evans', (req, res) => {
    res.send(`Dy-no-myte!`)
})

app.get('/Batman', (req, res) => {
    res.send(`To the Batmobile!`)
})

app.get('/Hannibal Smith', (req, res) => {
    res.send(`I love it when a plan comes together`)
})

app.get('/Fraiser', (req, res) => {
    res.send(`I'm listening`)
})

app.get('/Regis', (req, res) => {
    res.send(`Is that your final answer?`)
})

app.get('/Borg', (req, res) => {
    res.send(`Resistance is futile`)
})

app.get('/Fox Mulder', (req, res) => {
    res.send(`The truth is out there`)
})

app.get('/Harry Callahan', (req, res) => {
    res.send(`Go ahead, make my day`)
})


app.get('/Travis Bickle', (req, res) => {
    res.send(`You talkin' to me?`)
})

app.get('/Tony Montana', (req, res) => {
    res.send(`Say hello to my little friend`)
})

app.get('/Zeus', (req, res) => {
    res.send(`Release the Kraken`)
})

app.get('/James Bond', (req, res) => {
    res.send(`the name is Bond, James Bond`)
})

app.get('/Dorothy', (req, res) => {
    res.send(``)
})

app.get('/Rod Tidwell', (req, res) => {
    res.send(`Show me the money!`)
})

app.get('/Frankenstein', (req, res) => {
    res.send(`It's alive! It's alive`)
})

app.get('/Jim Lovell', (req, res) => {
    res.send(`Houston, we have a problem`)
})

app.get('/Rocky', (req, res) => {
    res.send(`Yo, Adrian`)
})

app.get('/Gollum', (req, res) => {
    res.send(`My precious`)
})

app.get('/Jack Dawson', (req, res) => {
    res.send(`I'm king of the world!`)
})

app.get('/Jack Dawson', (req, res) => {
    res.send(`I'm king of the world!`)
})


//Magic 8 ball code

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
    "Very doubtful"
  ]

const answer = Math.floor(Math.random() * magic8Responses.length)

let magic8Answer = magic8Responses[answer]

app.get('/magic8', (req, res) =>{
    res.send(`<h1 style='color : yellow;text-align:center;font-size:300%;font-family:courier;text-shadow: 2px 2px #ff0000; padding: 15%; margin: auto;'>${magic8Answer}</h1>`)
})
//I was not sure if I was supposed to make a button for this...

//LISTEN 


//Export
module.exports = app