const app = require("./app.js");

const PORT = 3003;

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
