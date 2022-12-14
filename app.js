// import express using require
const express = require("express")
// set up express app
const app = express()
// // set up listener for app <- moved to server.js
// app.listen(3003)
// get data from data.js file
const {punchlines, homePage, reference, objLoop, magic8Responses} = require("./data.js")

//  create route for landing page
app.get("/", (req, resp) => {
    resp.status(418).send(homePage)
})

// test params on root path
// .params -> (middleware runs b4 the .get, or .put etc) to look into data objects and set key value to be used in app.get resp.send
app.param("value", (req, resp, next, value) => {
    const input = value.split(` `).join(``).toLowerCase()
    let punchline;
    let ref; 
    // Activity 8 Ball
    if(input === "magic8"){
        req.punchline = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
        req.reference = "Your Conscious"
    }
    else{
        req.punchline = objLoop(punchline, punchlines, input)
        req.reference = objLoop(ref, reference, input)
    }
    next()
})

app.get("/:value", (req,resp) => {
    // req.punchline/ req.reference is available here from 'middleware' .params function
    resp.send(`
    ${req.punchline ? `<h2>${req.punchline} - (${req.reference})</h2>` : "<h2>Error, Page Not Found</h2>"}
    <br>
    <a href="http://localhost:3003/">Home</a>
    `)
}) 

// EXPORT for server.js/tests
module.exports = app



