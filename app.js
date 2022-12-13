//Node
const express = require("express")
const app = express()
// const PORT = process.env.PORT || 3003

//Routes
app.get('/', (req, res) => {
    res.status(444).send('Hello, world!')
})

app.get('/terminator',(req, res) => {
    res.send(`<h1>I'll be back</h1> <h1>Hasta la vista, baby</h1>`)
    // res.send('Hasta la vista, baby')
})

app.get('/emeril!',(req, res) => {
    res.send(`<h1>Bam!</h1>`)
})

app.get('/steve-mcgarrett',(req, res) => {
    res.send(`<h1>Book 'em Danno!</h1>`)
})

app.get('/JamesBond',(req, res) => {
    res.send(`<h1>the name is Bond, James Bond</h1>`)
})

app.get('/homer-simpson',(req, res) => {
    res.send(`<h1>D'Oh</h1>`)
})

app.get('/bruce-banner',(req, res) => {
    res.send(`<h1>Don't make me angry</h1>`)
})

app.get('/jj-evans ',(req, res) => {
    res.send(`<h1>Dy-no-myte!</h1>`)
})

app.get('/batman',(req, res) => {
    res.send(`<h1>To the Batmobile!</h1>`)
})

app.get('/Zeus',(req, res) => {
    res.send(`<h1>Release the Kraken</h1>`)
})

app.get('/tony-montana',(req, res) => {
    res.send(`<h1>Say hello to my little friend</h1>`)
})

//Magic 8 Ball
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

const magicRes = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]

app.get('/magic8',(req, res) => {
    res.send(`<h1>${magicRes}</h1>`)
})

//Listener
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })

// EXPORT
module.exports = app