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
// Answer= The only is /tim/gunn because this would going to path of tim and file in tim for gunn. /timgunn and /Timgunn are the same path
// If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?
module.exports = app
