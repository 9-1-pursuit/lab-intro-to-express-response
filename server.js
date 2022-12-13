const app = require("./app.js");

const PORT = process.env.PORT || 3003;

app.listen(3003, () => {
  console.log(
    "Listening on Port 3003 -- Please enjoy the Shakespeare Quote App"
  );
});
