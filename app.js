//DEPENDENCIES
const express = require('express')

//CONFIGURATION
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

//ROUTES
app.get("/terminator", (request, response) => {
    response.send("I'll be back");
  });

  app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })

  app.get('/James-Bond', (req, res) => {
    res.send('the name is Bond, James Bond')
  })

  app.get('/Joey-Tribbiani', (req, res) => {
    res.send("How you doin'?" )
  })

  app.get('/Michael-Scott', (req, res) => {
    res.send("That's what she said!")
  })

  app.get('/Barney-Stinson', (req, res) => {
    res.send("It's gonna be legen — wait for it — dary.")
  })

  app.get('/Sheldon', (req, res) => {
    res.send('Bazinga!')
  })

  app.get('/Gordon-Ramsay', (req, res) => {
    res.send("It's Raw!")
  })

  app.get('/Urkel', (req, res) => {
    res.send('Did I do that?')
  })

  app.get('/Jake-Peralta', (req, res) => {
    res.send('Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt.')
  })

  app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}</h1>`)
  })

//LISTEN

app.listen(PORT, () => {
    console.log("Listening for requests on port 3003");
  });