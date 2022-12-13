const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})

app.listen(PORT, () => {
  console.log(`waiting for a request on port ${PORT}`);
});
