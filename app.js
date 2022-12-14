const express = require('express')
const app = express()

app.get("/", (request, response) =>{
    response.status(418).send("Hello there World! My Name is Diane, and I built this server myself!")
})

//setup the variable PORT to use  whatever port will be used in the deployment environment (when this app is deployed) or alteratively - localhost 3003
// moved to server.js - const PORT = process.env.PORT || 3003

//setup a listener to "listen" to the port for requests
//moved to server.js - app.listen(PORT, () =>{
//     console.log("Listening on port:", PORT)
// })


//Routes

//Blank Route Template
// app.get("/",(req,res) =>{res.send("<h2> </h2>")})

app.get( "/",(request, response) => {
    response.send("<h1>My Name is Diane Stukes, and I built this server myself</h1>")
})


app.get("/Apostle_John",(req, res) =>{
res.send("<h3>For God so loved the world, that He gave His only begotton Son, that whosoever believes, will not perish but have everlasting life</h3>")
})


app.get("/The-Lord-Jesus1",(req,res) =>{res.send("<h3>Let not your heart be troubled. You believe in God, believe also in me.</h3>") })
app.get("/timgunn",(req,res) =>{res.send("<h2>Make it work.</h2>")})

//Assignment Questions
//Question 1: What happens if you try to create a URL /tim gunn
//Answer - the space prevents successfully rendering of the route, creates error: "Cannot GET /tim%20gunn"
//Question 2: Is there a difference between /timgunn and /TimGunn and /tim/gunn?
//Answer - between /timgunn and /TimGunn - no, but /tim/gunn is a different route path
//Question 3: If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?
//Answer: I tested the route: app.get("/test",(req,res) =>{res.send("<h2>Here's looking at you kid. </h2>")}) and found that if you use double-quotes on to wrap the text, the single quote, or apostrophe will display correctly.
//Question 4:  Try:  [What did you see in your browswer]
//Answer: Only the first response - "I'll be back" . -only one response can be sent
// app.get('/terminator', (req, res) => {
//     res.send('I\ll be back')
//     res.send('Hasta la vista, baby')
//   })


//More Routes of famous quotes
app.get("/Coach-Taylor",(req,res) =>{res.send("<h2>Clear eyes, full hearts, can't Lose </h2>")})
app.get("/Borg",(req,res) =>{res.send("<h2>Resistance is futile </h2>")})
app.get("/Fox-Mulder",(req,res) =>{res.send("<h2>The truth is out there </h2>")})
app.get("/Harry-Callahan",(req,res) =>{res.send("<h2>Go ahead, make my day </h2>")})
app.get("/Travis-Bickle",(req,res) =>{res.send("<h2>You talkin' to me? </h2>")})
app.get("Rod-Tidwell/",(req,res) =>{res.send("<h2>Show me the money! </h2>")})
app.get("/Frankenstein",(req,res) =>{res.send("<h2>It's alive! It's alive! </h2>")})
app.get("/Jim-Lovell",(req,res) =>{res.send("<h2>Houston, we have a problem </h2>")})
app.get("/Gollum",(req,res) =>{res.send("<h2>My precious!</h2>")})


//Randomizing the route response

const magic8Responses = [ "It is certain", "It is decidedly so", "Without a doubt","Yes - Definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes, and signs point to yes","Reply hazy, try again","Ask again later", "Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no",
    "Outlook not so good","Very doubtful"]
 
const x = Math.floor(Math.random() * magic8Responses.length)
const magic8Answer = magic8Responses[x]
// const totalElements = magic8Responses.length
app.get("/magic8",(req,res) =>{res.send(`<h2>${magic8Responses[x]} </h2>`)})
// app.get("/magic8",(req,res) =>{res.send(`<h1>${magic8Responses[18]} </h1>`)})
// app.get("/magic8",(req,res) =>{res.send(`<h1>${magic8Answer} </h1>`)})

// function magicAnswer(totalElements) {
//     return Math.floor(Math.random() * totalElements);
//   }
//   app.get("/magic8",(req,res) =>{res.send(`<h1>${magic8Answer()} </h1>`)})

app.get('*', function(req, res){
//  res.send('Oops! Sorry, there is an error', ${statusCode});
  if(res.statusCode !== 200){
    res.setHeader('Location', `/https://http.cat/${res.statusCode}`)
    res.end();
  }
})

module.exports = app
