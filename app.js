// import express using require
const express = require("express")
// set up express app
const app = express()
// set up listener for app 
app.listen(3003)
// get data from data.js file
const {punchlines} = require("./data.js")

//  create route for landing page
app.get("/", (req, resp) => {
    resp.send(`Home Page`)
})

// test params on root path
app.param("value", (req, resp, next, value) => {
    let punchline;
    for (let key in punchlines){
        if (value === key.toLowerCase()){
            punchline = punchlines[key] 
        }
    }
    req.punchline = punchline
    next()
})

app.get("/:value", (req,resp) => {
    // req.punchline is available here from 'middleware' .params function
    resp.send(`${req.punchline ? req.punchline : "Error, Page Not Found"}`)
}) 





