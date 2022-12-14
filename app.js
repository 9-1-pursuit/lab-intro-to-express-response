const express = require('express')
const app = express()

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

  function random(arr){
    const x = [Math.floor(Math.random() * arr.length)]
    const rndm = arr[x]
    return rndm}



//   1

app.get('/Coach-Taylor', (req, res) => {
    res.status(200).send(`Clear eyes, full hearts, can't lose!`)
  })

// 2
app.get('/terminator', (req, res) => {
    res.status(200).send(`Hasta la vista, baby, I'll be back`);
  });
//   3

app.get('/Bruce-Banner', (req, res) => {
    res.status(200).send(`Don't make me angry`)
  })
//   4
app.get('/Dorothy', (req, res) => {
    res.status(200).send(`Toto, I've got a feeling we're not in Kansas anymore`)
  })

// 5
app.get('/Rocky', (req, res) => {
    res.status(200).send(`Yo, Adrian`)
  })

//   6
app.get('/JJ-Evans', (req, res) => {
    res.status(200).send(`Dy-no-myte!`)
  })
//   7
app.get('/Batman', (req, res) => {
    res.status(200).send('To the Batmobile!')
  })
//   8
app.get('/Jack-Dawson', (req, res) => {
    res.status(200).send('Im king of the world!')
  })
//   9
app.get("/Emril", (req, res) => {
    res.status(200).send('bam!')
})
// 10

app.get('/Homer-Simpson', (req, res) => {
    res.status(200).send(`D'Oh`)
  })

//magic8

app.get("/magic8", (req, res) => {
    res.status(200).send(`<h1>${(random(magic8Responses))}</h1>`)
})


  module.exports = app