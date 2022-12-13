const express = require('express')
const app = express()
const PORT= process.env.PORT || 3003
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
//   magin8 ball function for math.random
function random(arr){
    const r = [Math.floor(Math.random() * arr.length)]
    const RandomBalls = arr[r]
    return RandomBalls
}


// 1 route - terminator
app.get("/terminator", (req, res) => {
    res.send(`I'll be back`)
    res.send(`Hasta la vista, baby`) //does not appear on the browser and shows error [ERR_HTTP_HEADERS_SENT]
})

//  terminator2
app.get("/terminator2", (req, res) => {
    res.send(`Hasta la vista, baby`) 
})

// 2 route- emril
app.get("/emril", (req, res) => {
    res.send('bam!')
})

// 3 route- jack-dawson
app.get("/jack-dawson", (req, res) => {
    res.send(`Im king of the world!`)
})

// 4 route- rocky
app.get("/rocky", (req, res) => {
    res.send(`Yo, Adrian`)
})

// 5 route- borg
app.get("/borg", (req, res) => {
    res.send(`Resistance is futile`)
})

// 6 route- travis bickle
app.get("/travis-bickle", (req, res) => {
    res.send(`You talkin' to me?`)
})

// 7 route- regis
app.get("/regis", (req, res) => {
    res.send(`Is that your final answer?`)
})

// 8 route- fox mulder
app.get("/fox-Mulder", (req, res) => {
    res.send('The truth is out there')
})
// 9 route- zeus
app.get("/zeus", (req, res) => {
    res.send('Release the Kraken')
})
// 10 route- dorothy
app.get("/dorothy", (req, res) => {
    res.send(`Toto, I've got a feeling we're not in Kansas anymore`)
})

// magic8 route
app.get("/magic8", (req, res) => {
    res.send(`<h1 style= color:purple>${(random(magic8Responses))}</h1>`)
})


// Listener
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
