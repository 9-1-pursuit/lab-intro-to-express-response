const punchlines = {
    Fraiser : "I'm listening",
    StanMarsh : "Oh, my God! They killed Kenny!",
    DaenerysTargaryen: "Dracarys", 
    BoJackHorseman : "Clean up your stuff Todd",
    Regis: "Is that your final answer?",
    TonyMontana: "Say hello to my little friend",
    Gollum: "My precious",
    Hannibal: "Hello Clarice",
    Goofy: "Hyuck"
}

const reference = {
    Fraiser : "Fraiser",
    StanMarsh : "South Park",
    DaenerysTargaryen: "Game of Thrones", 
    BoJackHorseman : "BoJack Horseman",
    Regis: "Who Wants To Be A Millionaire?",
    TonyMontana: "Scarface",
    Gollum: "Lord of the Rings",
    Hannibal: "Silence of the Lambs",
    Goofy: "A Goofy Movie"
}

const homePage = `
<h1>Home Page</h1>
<p>Possible endpoints : Fraiser, Stan Marsh, Daenerys Targaryen, Bojack Horseman, Regis, Tony Montana, Gollum, Hannibal, Goofy, magic8 </p>`

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
    reference,
    homePage,
    objLoop,
    magic8Responses
}