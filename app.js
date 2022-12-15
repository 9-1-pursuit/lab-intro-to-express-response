//Dependencies
const express = require("express")
const magic8Responses = require("./data/magic8Responses")

//Configuration
const app = express()
const PORT = 3003

//Routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})

app.get("/terminator2", (req, res) => {
    res.send("Hasta la vista, baby")
})

app.get("/tim-gunn", (req, res) => {
    res.send("Make it work")
})

app.get("/emeril", (req, res) => {
    res.send("Bam!")
})

app.get("/homer-simpson", (req, res) => {
    res.send("D'oh")
})

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/zeus", (req, res) => {
    res.send("Release the Kraken")
})

app.get("/james-bond", (req, res) => {
    res.send("The name is Bond, James Bond")
})

app.get("/travis-bickle", (req, res) => {
    res.send("You talkin' to me?")
})

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend")
})

app.get("/gollum", (req, res) => {
    res.send("My precious")
})

//Magic 8ball
app.get("/magic8", (req, res) => {
    const randomNum = Math.floor(Math.random() * magic8Responses.length)
    console.log(randomNum)
    res.send(`<h1>${magic8Responses[randomNum]}</h1>`)
})

//Listen
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})