//DEPENDENCIES
const express = require('express')

//CONFIGURATION
const app = express()
const PORT = 3003


//ROUTES
app.get("/terminator", (request, response) => {
    response.send("I'll be back");
  });

  app.get('tim-gunn', (req, res) => {
    res.send('Make it work')
  })

//LISTEN

app.listen(PORT, () => {
    console.log("Listening for requests on port 3003");
  });