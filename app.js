const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back`)
})

app.get('/timgunn', (req, res) => {
    res.send('Make it work')
})

app.get('/Emril', (req, res) => {
    res.send('BAM!')
})

app.get('Homer', (req, res) => {
    res.send(`D'oh`)
})

app.get('/Regis', (req, res) => {
    res.send('Is that your final answer?')
})

app.get('/Zues', (req, res) => {
    res.send('Release the kraken')
})

app.get('/Venom', (req, res) => {
    res.send('WE ARE VENOM')
})

app.get('/BruceBuffer', (req, res) => {
    res.send(`IT'S TIIIME`)
})

app.get('/DJPaulyD', (req, res) => {
    res.send('Cabs are here!!')
})



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

  const magic8Answer = Math.floor(Math.random() * magic8Responses.length)

  answer = magic8Responses[magic8Answer]

  app.get('/magic8ball', (req, res) => {
    res.send(answer)
  })

app.listen(3003, () => {
    console.log("Listening for request on port: 3003");
})


