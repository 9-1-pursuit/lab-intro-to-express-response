// DEPENDACIES 
const express = require("express")

// CONFIGURATION
const app = express()
const PORT = 9000
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
//   max = magic8Responses.length

//   function randomIntMagic8(max) {
//     return Math.floor(Math.random() * max)
//   }

// ROUTES
app.get('/', (request, response) => {
    response.send('home route')
})

app.get('/terminator', (request, response) => {
    response.send("i'll be back")
})

app.get('/tim-gunn', (request, response) => {
    response.send('Make it work')
})

app.get('/emeril', (request, response) => {
    response.send('Bam!')
})

app.get('/borg', (request, response) => {
    response.send('Resistance is futile')
})

app.get('/rocky', (request, response) => {
    response.send('Yo, Adrian')
})

app.get('/gollum', (request, response) => {
    response.send('My precious')
})

app.get('/jack-dawson', (request, response) => {
    response.send("I'm king of the world")
})

app.get('/regis', (request, response) => {
    response.send('Is that your final answer?')
})

app.get('/james-bond', (request, response) => {
    response.send('the name is Bond, James Bond')
})

app.get('/magic8', (request, response) => {
    response.send(`<h1>${magic8Responses[Math.floor(Math.random() * 13)]}</h1>`)
})
// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
}) 