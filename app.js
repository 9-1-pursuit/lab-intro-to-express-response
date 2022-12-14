// import express using require
const express = require("express")
// set up express app
const app = express()
// set up listener for app 
app.listen(3003)
// get data from data.js file
const {punchlines, homePage} = require("./data.js")

//  create route for landing page
app.get("/", (req, resp) => {
    resp.send(homePage)
})


// test params on root path
// .params -> (middleware runs b4 the .get, or .put etc) to look into data objects and set key value to be used in app.get .send
app.param("value", (req, resp, next, value) => {
    const input = value.split(` `).join(``).toLowerCase()
    let punchline;
    for (let key in punchlines){
        if (input === key.toLowerCase()){
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







