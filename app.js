const express = require("express");
const app = express();


const PORT = 3004;


app.get('/terminator', (request, response) => {
    response.send("I'll be back")
    response.send("Hasta la vista, baby")
  });

app.get('/bob-marley', (request, response) => {
    response.send("money make ya rich?")
});

app.get('/homer-simpson', (request, response) => {
    response.send("D'OH")
});

app.get('/50-cent', (request, response) => {
    response.send("get rich or die trying")
});

app.get('/stevie-wonder', (request, response) => {
    response.send("isn't she lovely, isn't she wonderful!")
});

app.get('/muhammad-ali', (request, response) => {
    response.send("float like a butterfly, sting like a bee!")
});

app.get('/MLK', (request, response) => {
    response.send("I have a dream!")
});

app.get('/regis', (request, response) => {
    response.send("Is that your final answer?")
});

app.get('/shaggy', (request, response) => {
    response.send("mr. lover lover")
});

app.get('/marlon-regis', (request, response) => {
    response.send("variety is the spice of life..")
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});