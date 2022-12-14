const express = require("express")



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

app.get("/", (request, res) => {
  res.send("Hello, World!");
});

app.get('/terminator', (req, res) => {
    res.send("I'll be back")
    res.send('Hasta la vista, baby')
  })

app.get('/tim-gunn', (req, res) => {
 res.send('Make it work')
 })

 app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })
  
  app.get('/Homer-Simpson', (req, res) => {
    res.send("D'Oh")
  })

  app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Batman', (req, res) => {
    res.send('To the batmobile!')
  })

  app.get('/Hannibal-Smith', (req, res) => {
    res.send('I love it when a plan comes together')
  })

  app.get('/Borg', (req, res) => {
    res.send('Resistance is futile')
  })

  app.get('/Regis', (req, res) => {
    res.send('Is that your final answer?')
  })

  app.get(`/magic8`, (req, res) => {
    res.send(`${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}`)
  })

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});