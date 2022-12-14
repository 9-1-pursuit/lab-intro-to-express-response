const punchlines = {
    Fraiser : {
        phrase: "I'm Listening",
        reference: "Fraiser"
    }, 
    StanMarsh : {
        phrase: "Oh, my God! They killed Kenny!",
        reference: "South Park"
    },
    DaenerysTargaryen: {
        phrase: "Dracarys", 
        reference: "Game of Thrones"
    }, 
    BoJackHorseman : {
        phrase: "Clean up your s#!% Todd",
        reference: "BoJack Horseman"
    }, 
    Navi:  {
        phrase: "Hey, Listen!",
        reference: "Zelda"
    },
    TonyMontana:  {
        phrase: "Say hello to my little friend",
        reference: "Scarface"
    },
    Gollum:  {
        phrase: "My precious",
        reference: "Lord of the Rings"
    }, 
    Hannibal:  {
        phrase: "Hello Clarice",
        reference: "Silence of the Lambs"
    },
    Goofy:  {
        phrase: "Hyuck",
        reference: "A Goofy Movie"
    },
}

const homePage = `
<h1>Home Page</h1>
<p>Possible endpoints : Fraiser, Stan Marsh, Daenerys Targaryen, Bojack Horseman, Navi, Tony Montana, Gollum, Hannibal, Goofy, magic8 </p>`

// function for looping into data objects
function objLoop(variable, obj, input){
    for (let key in obj){
        if(input === key.toLowerCase()){
            variable = obj[key]
        }
    }
    return variable
}

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

module.exports = {
    punchlines,
    homePage,
    objLoop,
    magic8Responses
}