// requiring express
const express = require("express")
// console.log(express)
// to get server working, setting up app = express()
const app = express()
const port = 3003

// basic express server

app.get("/", (req, res) => {
  res.send("<h1>REdGH0st</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/terminator", (req, res) => {
  res.send("I'll be back")
  res.send("Hasta la vista, baby")
})

app.get("tim-gun", (req, res) => {
  res.send("Make it work")
})

// Thought questions
// What characters are allowed in a URL?
// Answer == Only characters allowed in a url are a ; , / ? : @ & = ? $ - _ . ! ~ * ' () #

// What happens if you try to create a URL /tim gunn
// ANSWER = I received a  Cannot GET /tim-gunn

// Is there a difference between /timgunn and /TimGunn and /tim/gunn?
// Answer= The only  difference is /tim/gunn because this would going to path of tim and file in tim for gunn. /timgunn and /Timgunn are the same path

// If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?
// Answer === There is two ways use single quotes inside double quotes or Here/s

app.get("/Emeril", (req, res) => {
  res.send("Bam!!!")
})

app.get("/Steve_McGarrett", (req, res) => {
  res.send("Book 'em Danno!")
})

app.get("/Coach_Taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose")
})

app.get("/Homer_Simpson", (req, res) => {
  res.send("D'Oh")
})

app.get("/Bruce_Banner", (req, res) => {
  res.send("Don't make me angry")
})

app.get("/JJ_Evans", (req, res) => {
  res.send("Dy-no-myte!")
})

app.get("/Batman ", (req, res) => {
  res.send("To the Batmobile!")
})

app.get("/Hannibal_Smith ", (req, res) => {
  res.send("I love it when a plan comes together")
})

app.get("/Fraiser", (req, res) => {
  res.send("I'm listening")
})

// What do you see in your browser
//  Answer = One message "I'll be back"

// What does this error message mean?
// You can not send two res.send() per request unless a condition is set

// Activity Magic 8 Ball

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
  "Very doubtful",
]

let magic8Answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)]

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`)
})
module.exports = app
