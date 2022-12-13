// DEPENDACIES 
const express = require("express")

// CONFIGURATION
const app = express()
const PORT = 9000

// ROUTES
app.get('/', (request, response) => {
    response.send('home route')
})

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})