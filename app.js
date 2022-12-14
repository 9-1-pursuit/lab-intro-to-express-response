const express = require("express");
// console.log(express);
const app = express();

//first route
app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

//second route
app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

//third route
app.get("/regis", (req, res) => {
  res.send("Is that your final awnswer?");
});

//fourth route
app.get("/bruce", (req, res) => {
  res.send(`Don't make me angry`);
});

//fifth route
app.get("/harrycallahan", (req, res) => {
  res.send("Go ahead, and make my day");
});

//sixth route
app.get("/coachtaylor", (req, res) => {
  res.send("Clear eyes, full hearts, cant lose");
});

//seventh route
app.get("/foxmulder", (req, res) => {
  res.send("The truth is out there");
});

//eight route
app.get("/gollum", (req, res) => {
  res.send("My precious");
});

//ninth route
app.get("/rodtidwell", (req, res) => {
  res.send("Show me the money!");
});
//tenth route
app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

//listner
app.listen(3003, () => {
  console.log("Listening for requests on port 3003");
});
