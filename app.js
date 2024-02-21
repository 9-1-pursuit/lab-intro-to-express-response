const express = require("express");
const app = express();


const PORT = 3004;


app.get('/bob-marley', (request, response) => {
    response.send("some people are so poor, all they have is money")
  });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});