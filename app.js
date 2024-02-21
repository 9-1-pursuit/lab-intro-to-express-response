const express = require("express");
const app = express();

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    // the first one to appear randomly in URL
    "You may rely on it", 
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    // the second one to appear randomly in URL
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

const PORT = 3004;


app.get('/terminator', (request, response) => {
    response.send("I'll be back")
    response.send("Hasta la vista, baby")
    // I saw the first message not the second
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

app.get('/magic8', (request, response) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];

    response.send(randomResponse);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});