const express = require('express')

const app = express()
const PORT = 3003


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

const magic8Answers = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

// Terminator
app.get('/terminator', (req, res) => {
    res.send(`I'll be back.` + ' ' +' Hasta la vista, baby!')
})

// Using professional wrestler catchphrases as tests.

// 1. Orange Cassidy 
app.get('/orange-cassidy', (req, res) => {
    res.send('Freshly Squeezed.')
})

// 2. Ricky Starks
app.get('/ricky-starks', (req, res) => {
    res.send('Absolute Ricky Starks.')
})

// 3. Kris Statlander
app.get('/kris-statlander', (req, res) => {
    res.send('More than a woman.')
})

// 4. Best Friends
app.get('/best-friends', (req, res) => {
    res.send('Gotta give the people what they want!')
})

// 5. Blackpool Combat Club
app.get('/blackpool-combat-club', (req, res) => {
    res.send('Forged in combat.')
})

// 6. Naomi 
app.get('/naomi', (req, res) => {
    res.send('Feel the glow!')
})

// 7. Liv Morgan
app.get('/liv-morgan', (req, res) => {
    res.send('Watch me.')
})

// 8. Sasha Banks
app.get('/sasha-banks', (req, res) => {
    res.send(`It's BOSS time!`)
})

// 9. Adam Cole
app.get('/adam-cole', (req, res) => {
    res.send('Adam Cole, Baybay!')
})

// Magic 8 Ball
app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Answers}</h1>`)
})