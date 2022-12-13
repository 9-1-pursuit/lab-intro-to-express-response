const express = require("express");
const app = express();
const PORT = process.argv.PORT || 3003;

app.get("/", (req, res) => {
  res.send("App running");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista baby!");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.listen(PORT, () => {
  console.log(`Server listening for requests on port ${PORT}`);
});
