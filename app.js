
const express = require('express')



const app = express()

//First Route
app.get("/terminator", (req , res) => {
    res.send("I'll be back")
    res.send('Hasta la vista, baby')
})

//Second Route
app.get("/batman", (req , res) => {
    res.send("To the Batmobile")
})

//Third Route 
app.get("/batman", (req , res) => {
    res.send("To the Batmobile")
})

//Fourth Route 
app.get("/borg", (req , res) => {
    res.send("Resistance is futile")
})

//Fifth Route 
app.get("/Zeus", (req , res) => {
    res.send("Release the Kraken")
})

//Sixth Route
app.get("/Gollum", (req , res) => {
    res.send("Precious")
})

//Seventh Route 
app.get("/regis", (req , res) => {
    res.send("Is that your final answer")
})

//Eigth Route 
app.get("/Fraiser", (req , res) => {
    res.send("I'm listening")
})

//Ninth Route 
app.get("/Emeril", (req , res) => {
    res.send("Bam!")
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


const random = Math.floor(Math.random() * magic8Responses.length)


//Tenth Route 
app.get("/Luffy", (req , res) => {
    res.send("I will be the King of the Pirates")
})

//Magic Eight Ball
app.get("/magic8", (req , res) => {
    res.send(`<h1>${magic8Responses[random]}</h1>`)
})

app.listen(3003) , () => {
    console.log(`Listening for request on port: 3003`)
}